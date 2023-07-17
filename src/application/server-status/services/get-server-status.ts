import { Injectable } from '@nestjs/common';
import { ServerStatus } from '../entities/server-status-entity';
import { ServerStatusRepository } from '../repositories/server-status-repository';
import { getUptime } from '../helpers/get-uptime';
import { getMemoryUsage } from '../helpers/get-memory-usage';

type GetServerStatusResponse = Promise<ServerStatus>;

@Injectable()
export class GetServerStatus {
  constructor(
    private readonly serverStatusRepository: ServerStatusRepository,
  ) {}

  async execute(): GetServerStatusResponse {
    const db_connection =
      await this.serverStatusRepository.getDatabaseConnectionStatus();
    const lastCronRun = await this.serverStatusRepository.getLastCronRun();
    const uptime = getUptime();
    const memoryUsage = getMemoryUsage();

    const serverStatus = new ServerStatus({
      apiStatus: 'ok',
      dbConnection: db_connection ? 'ok' : 'error',
      uptime,
      memoryUsage,
      lastCronRun: lastCronRun?.runAt ?? null,
    });

    return serverStatus;
  }
}
