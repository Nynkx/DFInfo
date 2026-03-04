<script lang="ts">
  import { Menu } from "@skeletonlabs/skeleton-svelte";

  import "../../app.css";

  let { children } = $props();
</script>

<div class="h-screen grid grid-rows-[auto_1fr_auto]">
  <header class="p-2 border-b border-double border-gray-300">
    <div class="flex items-center justify-center">
      <h1 class="align-middle">Header</h1>

      <Menu>
        <Menu.Trigger class="btn preset-outlined border-gray-500">
          Server
        </Menu.Trigger>
      </Menu>
    </div>
  </header>
  <div class="grid grid-col md:grid-cols-[auto_1fr]">
    <aside class="p-2 border-r border-double border-gray-300">aside</aside>
    <main class="p-2 border-l border-double border-gray-300">
      {@render children()}
    </main>
  </div>
  <footer class="p-2 border-t border-double border-gray-300">footer</footer>
</div>
