import { makeCronJob } from '@test/factories/cron-job-factory';

describe('CronJob', () => {
  it('should be able to create a cron job', () => {
    const cronJob = makeCronJob();

    expect(cronJob).toBeTruthy();
  });

  it('should be able to change the status of a cron job', () => {
    const cronJob = makeCronJob();

    cronJob.status = 'FAILURE';

    expect(cronJob.status).toBe('FAILURE');
  });

  it('should be able to update the runAt of a cron job', () => {
    const cronJob = makeCronJob();

    const newRunAt = new Date();
    cronJob.runAt = newRunAt;

    expect(cronJob.runAt).toBe(newRunAt);
  });

  it('should be able to change the name of a cron job', () => {
    const cronJob = makeCronJob();

    const newName = 'newCronJob';
    cronJob.name = newName;

    expect(cronJob.name).toBe(newName);
  });

  it('should be able to set the error of a cron job', () => {
    const cronJob = makeCronJob();

    const newError = 'newError';
    cronJob.error = newError;

    expect(cronJob.error).toBe(newError);
  });
});
