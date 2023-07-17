import {
  ICronJob,
  CronJob,
  JobStatus,
} from '@application/server-status/entities/cron-job-entity';
import {
  Crons as PrismaCronJob,
  JobStatus as PrismaJobStatus,
} from '@prisma/client';

export class PrismaCronJobMapper {
  static toDomain(prismaCronJob: PrismaCronJob | undefined): CronJob | null {
    if (!prismaCronJob) {
      return null;
    }
    const cronJobProps: ICronJob = {
      name: prismaCronJob.name,
      runAt: prismaCronJob.runAt,
      status: prismaCronJob.status as JobStatus,
      error: prismaCronJob.error || undefined,
    };

    return new CronJob(cronJobProps, prismaCronJob.id);
  }

  static toPersistence(cronJob: CronJob): PrismaCronJob {
    const prismaCronJob: PrismaCronJob = {
      id: cronJob.id,
      name: cronJob.name,
      runAt: cronJob.runAt,
      status: cronJob.status as PrismaJobStatus,
      error: cronJob.error || null,
    };

    return prismaCronJob;
  }
}
