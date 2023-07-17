import { makeServerStatus } from '@test/factories/server-status-factory';

describe('ServerStatus', () => {
  it('should be able to create a server status', () => {
    const serverStatus = makeServerStatus();

    expect(serverStatus).toBeTruthy();
  });

  it('should be able to change the dbConnection of a server status', () => {
    const serverStatus = makeServerStatus();

    serverStatus.dbConnection = 'error';

    expect(serverStatus.dbConnection).toBe('error');
  });

  it('should be able to update the uptime of a server status', () => {
    const serverStatus = makeServerStatus();

    const newUptime = '10 seconds';
    serverStatus.uptime = newUptime;

    expect(serverStatus.uptime).toBe(newUptime);
  });

  it('should be able to change the memoryUsage of a server status', () => {
    const serverStatus = makeServerStatus();

    const newMemoryUsage = '50 MB';
    serverStatus.memoryUsage = newMemoryUsage;

    expect(serverStatus.memoryUsage).toBe(newMemoryUsage);
  });

  it('should be able to set the lastCronRun of a server status', () => {
    const serverStatus = makeServerStatus();

    const newLastCronRun = new Date();
    serverStatus.lastCronRun = newLastCronRun;

    expect(serverStatus.lastCronRun).toBe(newLastCronRun);
  });
});
