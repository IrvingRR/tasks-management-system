<script>
    
    export default {
        name: 'Button',
        props: ['label', 'icon', 'variant', 'radius', 'size', 'scale']
    }
    
</script>

<template>
    <button class="button" :class="[variant, radius, size]">
       <v-icon v-if="icon" :name="icon" :scale="scale"/>
        {{ label }}
    </button>
</template>

<style scoped>

    .button {
        padding: 8px 15px;
        border-radius: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: var(--primary-color);
        color: var(--white-color);
    }

    .button:hover {
        background-color: var(--primary-color-hover);
    }
    .outline {
        background-color: transparent;
        color: var(--primary-color);
        border-color: var(--primary-color);
    }

    .outline:hover {
        color: var(--white-color);
    }


    /* Secondary variant */
    .button.secondary {
        background-color: var(--secondary-color);
    }

    .button.secondary:hover {
        background-color: var(--secondary-color-hover);
    }

    .button.secondary.outline {
        background-color: transparent;
        color: var(--secondary-color);
        border-color: var(--secondary-color);
    }

    .button.secondary.outline:hover {
        background-color: var(--secondary-color);
        color: var(--white-color);
    }

    .outline:hover {
        color: var(--white-color);
    }

    /* Third variant */
    .button.third.light {
        background-color: var(--background-primary-light);
        color: var(--font-color-light);
    }
    
    .button.third.dark {
        background-color: var(--background-primary-dark);
        color: var(--font-color-dark);
    }

    /* Transparent variant */
    .transparent {
        background-color: transparent
    }

</style>