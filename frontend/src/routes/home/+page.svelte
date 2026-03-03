<script lang="ts">
  export let data;
  import blank from "$lib/static/blank.png";
</script>

<div class="">
  {#each data.jobs.rows as job}
    <section class="p-2" id={job.jobId}>
      <h2 class="p-2">{job.jobName}</h2>
      <div class="grid grid-cols-5 gap-x-4">
        {#each job.rows as jobgrow}
          <div class="card preset-outlined-surface-500 h-[200px]">
            <a href="*" class="relative block size-full">
              <img src={blank} alt="" class="size-full" />
              <div class="absolute inset-0 flex items-center justify-center">
                {jobgrow.jobGrowName}
              </div></a
            >
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style lang="postcss">
  @reference "tailwindcss";
  /* :global(html) {
    background-color: theme(--color-gray-100);
  } */
</style>
