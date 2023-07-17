import { CronJob } from '../entities/cron-job-entity';

export abstract class ServerStatusRepository {
  abstract getDatabaseConnectionStatus(): Promise<boolean>;
  abstract getLastCronRun(): Promise<CronJob | null>;
}
