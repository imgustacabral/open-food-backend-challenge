import { CronModule } from '@infra/cron/cron.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CronModule],
})
export class AppModule {}
