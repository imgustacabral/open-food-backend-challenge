import { GetServerStatus } from './get-server-status';
import { InMemoryServerStatusRepository } from '@test/repositories/in-memory-server-status-repository';

describe('Get Server Status', () => {
  it('should be able to get server status', async () => {
    const serverStatusRepository = new InMemoryServerStatusRepository();
    const getServerStatus = new GetServerStatus(serverStatusRepository);
    const serverStatus = await getServerStatus.execute();
    expect(serverStatus).toBeTruthy();
  });
});
