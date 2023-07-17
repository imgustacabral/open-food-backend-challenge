import { PrismaCronJobMapper } from '../mappers/prisma-cron-job-mapper';
import { ServerStatusRepository } from '@application/server-status/repositories/server-status-repository';
import { CronJob } from '@application/server-status/entities/cron-job-entity';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaServerStatusRepository implements ServerStatusRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getDatabaseConnectionStatus(): Promise<boolean> {
    try {
      await this.prisma.$connect();
      return true;
    } catch (err) {
      return false;
    }
  }

  async getLastCronRun(): Promise<CronJob | null> {
    try {
      const lastCronJob = await this.prisma.crons.findFirst({
        orderBy: {
          runAt: 'desc',
        },
      });

      if (!lastCronJob) {
        return null;
      }

      return PrismaCronJobMapper.toDomain(lastCronJob);
    } catch (error) {
      return null;
    }
  }
}
