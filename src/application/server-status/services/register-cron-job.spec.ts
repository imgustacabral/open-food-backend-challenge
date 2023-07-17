import { RegisterCronJob } from './register-cron-job';
import { InMemoryCronJobRepository } from '@test/repositories/in-memory-cron-job.repository';
import { CronJob } from '../entities/cron-job-entity';

describe('RegisterCronJob', () => {
  it('should be able to register a cron job', async () => {
    const inMemoryCronJobRepository = new InMemoryCronJobRepository();
    const registerCronJob = new RegisterCronJob(inMemoryCronJobRepository);
    const cronJob = new CronJob({
      name: 'Test Cron Job',
      runAt: new Date(),
      status: 'SUCCESS',
    });

    await registerCronJob.execute({ cronJob });

    expect(inMemoryCronJobRepository.cronJobs[0]).toBe(cronJob);
  });
});
