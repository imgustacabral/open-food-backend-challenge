import { CronJob } from '@application/server-status/entities/cron-job-entity';
import { CronJobRepository } from '@application/server-status/repositories/cron-job-repository';

export class InMemoryCronJobRepository implements CronJobRepository {
  public cronJobs: CronJob[] = [];

  async create(cronJob: CronJob): Promise<void> {
    this.cronJobs.push(cronJob);
  }
}
