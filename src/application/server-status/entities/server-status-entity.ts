import { randomUUID } from 'node:crypto';

export type APIStatus = 'ok';
export type DBConnection = 'ok' | 'error';

export interface IServerStatus {
  apiStatus: APIStatus;
  dbConnection: DBConnection;
  uptime: string;
  memoryUsage: string;
  lastCronRun: Date | null;
}

export class ServerStatus {
  private _id: string;
  private props: IServerStatus;

  constructor(props: IServerStatus, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get apiStatus(): APIStatus {
    return this.props.apiStatus;
  }

  get dbConnection(): DBConnection {
    return this.props.dbConnection;
  }

  set dbConnection(value: DBConnection) {
    this.props.dbConnection = value;
  }

  get uptime(): string {
    return this.props.uptime;
  }

  set uptime(value: string) {
    this.props.uptime = value;
  }

  get memoryUsage(): string {
    return this.props.memoryUsage;
  }

  set memoryUsage(value: string) {
    this.props.memoryUsage = value;
  }

  get lastCronRun(): Date | null {
    return this.props.lastCronRun ? this.props.lastCronRun : null;
  }

  set lastCronRun(value: Date) {
    this.props.lastCronRun = value;
  }
}
