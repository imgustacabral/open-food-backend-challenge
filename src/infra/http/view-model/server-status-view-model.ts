import { ServerStatus } from '@application/server-status/entities/server-status-entity';

export class ServerStatusViewModel {
  static toHTTP(serverStatus: ServerStatus) {
    return {
      api_status: serverStatus.apiStatus,
      db_connection: serverStatus.dbConnection,
      uptime: serverStatus.uptime,
      memory_usage: serverStatus.memoryUsage,
      last_cron_run: serverStatus.lastCronRun
        ? new Date(serverStatus.lastCronRun)
        : null,
    };
  }
}
