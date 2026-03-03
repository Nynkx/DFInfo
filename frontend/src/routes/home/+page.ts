import { onMount } from "svelte";
import type { PageLoad } from "../$types";

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

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("http://localhost:8080/jobs");

  if (!res.ok) {
  }

  const jobs: Jobs = await res.json();

  return { jobs };
};
