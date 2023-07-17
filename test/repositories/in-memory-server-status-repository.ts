import { CronJob } from '@application/server-status/entities/cron-job-entity';
import { ServerStatusRepository } from '@application/server-status/repositories/server-status-repository';

export class InMemoryServerStatusRepository implements ServerStatusRepository {
  private dbStatus = true;
  private lastCronJobs: CronJob[] = [];

  async getDatabaseConnectionStatus(): Promise<boolean> {
    return this.dbStatus;
  }

  async getLastCronRun(): Promise<CronJob | null> {
    if (this.lastCronJobs.length === 0) {
      return null;
    }

    return this.lastCronJobs[this.lastCronJobs.length - 1];
  }

  setDatabaseConnectionStatus(status: boolean): void {
    this.dbStatus = status;
  }

  addCronJob(cronJob: CronJob): void {
    this.lastCronJobs.push(cronJob);
  }
}
