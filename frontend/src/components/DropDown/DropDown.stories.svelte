<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import DropDown from './DropDown.svelte';


    const { Story } = defineMeta({
        
        component: DropDown,
        argTypes: {
            position: { control: 'select', options: ['left', 'right'] },
            options: { control: 'object' ,options: ["1", "2", "3"] },
            onSelect: { action: 'selected'}
        },

    });

</script>

<Story name="Default"/>