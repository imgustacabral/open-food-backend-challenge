import { CronJob } from '../entities/cron-job-entity';

export abstract class CronJobRepository {
  abstract create(cronjob: CronJob): Promise<void>;
}
