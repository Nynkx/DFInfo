<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import DropDown from './DropDown.svelte';


    const { Story } = defineMeta({
        
        component: DropDown,
        argTypes: {
            position: { control: 'select', options: ['left', 'right'] },
            
            
        },

    });

</script>

<Story name="Default"/>