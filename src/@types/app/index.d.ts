export interface Job {
  jobId: string;
  jobName: string;
  rows: Array<JobGrow>;
}

export interface JobGrow {
  JobGrowId: string;
  JobGrowName: string;
  next?: JobGrow;
}

export interface Jobs {
  rows: Job;
}
