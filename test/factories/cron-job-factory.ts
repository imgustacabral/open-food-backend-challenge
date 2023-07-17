import {
  ICronJob,
  CronJob,
} from '@application/server-status/entities/cron-job-entity';

type Override = Partial<ICronJob>;

export function makeCronJob(override: Override = {}) {
  return new CronJob({
    name: 'DefaultJob',
    runAt: new Date(),
    status: 'SUCCESS',
    ...override,
  });
}
