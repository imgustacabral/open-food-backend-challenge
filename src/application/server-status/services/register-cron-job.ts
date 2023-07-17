import { Injectable } from '@nestjs/common';
import { CronJobRepository } from '../repositories/cron-job-repository';
import { CronJob } from '../entities/cron-job-entity';

interface RegisterCronJobRequest {
  cronJob: CronJob;
}

type RegisterCronJobResponse = Promise<void>;

@Injectable()
export class RegisterCronJob {
  constructor(private readonly cronJobRepository: CronJobRepository) {}

  async execute({ cronJob }: RegisterCronJobRequest): RegisterCronJobResponse {
    await this.cronJobRepository.create(cronJob);
  }
}
