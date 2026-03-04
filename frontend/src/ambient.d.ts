interface Jobs {
  rows: Array<Job>;
}

interface Job {
  jobId: string;
  jobName: string;
  rows: Array<JobGrow>;
}

interface JobGrow {
  jobGrowId: string;
  jobGrowName: string;
  next: JobGrow | null;
}
