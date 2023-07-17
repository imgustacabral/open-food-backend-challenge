import {
  IServerStatus,
  ServerStatus,
} from '@application/server-status/entities/server-status-entity';

type Override = Partial<IServerStatus>;

export function makeServerStatus(override: Override = {}) {
  return new ServerStatus({
    apiStatus: 'ok',
    dbConnection: 'ok',
    uptime: '0 seconds',
    memoryUsage: '0 MB',
    lastCronRun: new Date(),
    ...override,
  });
}
