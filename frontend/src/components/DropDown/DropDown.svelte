<script lang="ts">
    import './dropdown.css';

    interface DropDownProps {
      position: string;
      options: string[];
      onSelect: (option: string) => void;
    }

    const {position="left", options= ["1", "2", "3"], onSelect= (option: string) => console.log(option)}: DropDownProps = $props();
;
    
</script>





<div class="relative inline-block text-left">
    <div>
        <button type="button" class="dropdown-button" id="menu-button" aria-expanded="true" aria-haspopup="true" data-dropdpown-trigger="hover" data-dropdown-toggle="dropdownMenu">
          Options
          <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>

          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 8.4 9.5" to="0 8.4 9.5" dur="0.5s" additive="sum" repeatCount="indefinite" />
        </button>
      </div>
      <div id="dropdownMenu" class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" 
      class:right-0={position === "right"}

      role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          {#each options as option, index}
            <a href="empty" 
            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-200 focus:text-gray-900 focus:outline-hidden 
                                                           hover:bg-gray-200 hover:text-gray-900 text-heading" 
            role="menuitem" 
            tabindex="-1" 
            id={"menu-item-" + index}
            on:click={() => onSelect(option)}
            >
              {option}
            </a>
          {/each}
        </div>
      </div>
</div>