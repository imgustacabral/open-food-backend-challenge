import { randomUUID } from 'node:crypto';

export type JobStatus = 'SUCCESS' | 'FAILURE';

export interface ICronJob {
  name: string;
  runAt: Date;
  status: JobStatus;
  error?: string;
}

export class CronJob {
  private _id: string;
  private props: ICronJob;

  constructor(props: ICronJob, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get runAt(): Date {
    return this.props.runAt;
  }

  set runAt(value: Date) {
    this.props.runAt = value;
  }

  get status(): JobStatus {
    return this.props.status;
  }

  set status(value: JobStatus) {
    this.props.status = value;
  }

  get error(): string | undefined {
    return this.props.error;
  }

  set error(value: string | undefined) {
    this.props.error = value;
    this.props.status = 'FAILURE';
  }
}
