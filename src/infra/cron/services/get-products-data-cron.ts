import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import * as zlib from 'zlib';
import * as readline from 'readline';
import { Readable } from 'stream';
import { CreateProduct } from '@application/product/services/create-product';
import { ProductCronMapper } from '../mappers/product-cron-mapper';
import { RegisterCronJob } from '@application/server-status/services/register-cron-job';
import { CronJob } from '@application/server-status/entities/cron-job-entity';

@Injectable()
export class GetProductsDataCron {
  private readonly logger = new Logger(GetProductsDataCron.name);
  private baseURL = process.env.OPEN_FOOD_FACTS_BASE_URL;

  constructor(
    private readonly createProduct: CreateProduct,
    private readonly registerCronJob: RegisterCronJob,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async handleCron() {
    try {
      const response = await axios.get(this.baseURL + 'index.txt');
      const files = response.data
        .split('\n')
        .map((file) => file.trim())
        .filter(Boolean);

      for (const file of files) {
        this.logger.log(`Downloading file ${this.baseURL + file}`);
        const { data } = await axios.get(this.baseURL + file, {
          responseType: 'arraybuffer',
        });

        const bufferStream = new Readable();
        bufferStream.push(data);
        bufferStream.push(null);

        const gunzip = zlib.createGunzip();
        const stream = bufferStream.pipe(gunzip);

        let count = 0;
        const lineReader = readline.createInterface({
          input: stream,
          crlfDelay: Infinity,
        });

        for await (const line of lineReader) {
          if (count < 100) {
            try {
              const product = ProductCronMapper.toDomain(JSON.parse(line));
              await this.createProduct.execute({ product });
            } catch (error: any) {
              this.logger.error(
                `Failed to import product ${count + 1}: ${error.message}`,
              );
            }
            count++;
          } else {
            lineReader.close();
          }
        }

        const cronJob = new CronJob({
          name: 'getProductsData',
          runAt: new Date(),
          status: 'SUCCESS',
        });
        await this.registerCronJob.execute({
          cronJob,
        });
      }
    } catch (error: any) {
      this.logger.error(`Failure: ${error.message}`);

      const cronJob = new CronJob({
        name: 'getProductsData',
        runAt: new Date(),
        status: 'FAILURE',
        error: error.message,
      });

      await this.registerCronJob.execute({
        cronJob,
      });
    }
  }
}
