import { CronJob } from '@application/server-status/entities/cron-job-entity';
import { PrismaCronJobMapper } from '../mappers/prisma-cron-job-mapper';
import { CronJobRepository } from '@application/server-status/repositories/cron-job-repository';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCronJobRepository implements CronJobRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(cronJob: CronJob): Promise<void> {
    const prismaCronJob = PrismaCronJobMapper.toPersistence(cronJob);
    await this.prisma.crons.create({
      data: prismaCronJob,
    });
  }
}
