import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { GetProductsDataCron } from './services/get-products-data-cron';
import { CreateProduct } from '@application/product/services/create-product';
import { DatabaseModule } from '@infra/database/database.module';
import { RegisterCronJob } from '@application/server-status/services/register-cron-job';
import { PrismaService } from '@infra/database/prisma/services/prisma.service';

@Module({
  imports: [ScheduleModule.forRoot(), DatabaseModule],
  providers: [
    GetProductsDataCron,
    CreateProduct,
    RegisterCronJob,
    PrismaService,
  ],
})
export class CronModule {}
