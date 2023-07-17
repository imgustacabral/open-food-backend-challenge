import { CronModule } from '@infra/cron/cron.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, CronModule],
})
export class AppModule {}
