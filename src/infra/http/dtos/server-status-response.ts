import { ApiProperty } from '@nestjs/swagger';

export class ServerStatusResponse {
  @ApiProperty()
  api_status: string;

  @ApiProperty()
  db_connection: string;

  @ApiProperty()
  uptime: string;

  @ApiProperty()
  memory_usage: string;

  @ApiProperty()
  last_cron_job: Date;
}
