import { Controller, Get } from '@nestjs/common';
import { GetServerStatus } from '@application/server-status/services/get-server-status';
import { ServerStatusViewModel } from '../view-model/server-status-view-model';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServerStatusResponse } from '../dtos/server-status-response';

@ApiTags('Server Status')
@Controller('/')
export class GetServerStatusController {
  constructor(private readonly getServerStatus: GetServerStatus) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get server status' })
  @ApiResponse({
    status: 200,
    description: 'Returns the server status.',
    type: ServerStatusResponse,
  })
  async execute() {
    const serverStatus = await this.getServerStatus.execute();

    return ServerStatusViewModel.toHTTP(serverStatus);
  }
}
