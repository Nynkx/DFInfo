<script lang="ts">
  import blank from "$lib/static/blank.png";
  import { onMount } from "svelte";

  import { Tooltip, Portal } from "@skeletonlabs/skeleton-svelte";

  let data: Jobs = $state({ rows: [] });

  onMount(async () => {
    const res = await fetch("http://localhost:8080/jobs");

    if (!res.ok) {
    }

    data = await res.json();
  });

  function get_advancement(jobGrow: JobGrow): Array<JobGrow> {
    let adv_list = Array<JobGrow>();
    let current_jobGrow = jobGrow.next;

    while (current_jobGrow != null) {
      adv_list.push(current_jobGrow);
      current_jobGrow = current_jobGrow.next;
    }

    return adv_list;
  }
</script>

<div class="w-[80%]">
  {#each data.rows as job}
    <section class="p-2">
      <h2 class="p-2">{job.jobName}</h2>
      <div class="grid grid-cols-5 gap-x-4">
        {#each job.rows as jobgrow}
          <Tooltip positioning={{ placement: "bottom" }} interactive={true}>
            <Tooltip.Trigger>
              <div class="card preset-outlined-surface-500 h-[200px]">
                <a href={"/home/" + job.jobId} class="relative block size-full">
                  <img src={blank} alt="" class="size-full" />
                  <div
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    {jobgrow.jobGrowName}
                  </div>
                </a>
              </div>
            </Tooltip.Trigger>
            <Portal>
              <Tooltip.Positioner class="z-20!">
                <Tooltip.Content
                  class="card preset-outlined-surface-400-600 w-100"
                >
                  <div class="text-center">Advancement</div>
                  <div class="flex justify-evenly">
                    {#each get_advancement(jobgrow) as advancement, idx}
                      <span class="pr-1">{advancement.jobGrowName}</span>
                      <!-- {#if idx < 2}
                      ->
                    {/if} -->
                    {/each}
                  </div>
                </Tooltip.Content>
              </Tooltip.Positioner>
            </Portal>
          </Tooltip>
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
