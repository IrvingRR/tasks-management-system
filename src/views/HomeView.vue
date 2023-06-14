<script>

    import Button from '@/common/Button.vue';
    import { RouterLink } from 'vue-router';

    export default {
        name: 'HomeView',
        components: { Button, RouterLink }
    }
</script>

<template>
    <div class="homeview-container">
        <v-icon name="io-logo-web-component" scale="4"/>
        <h1 class="homeview-title">
            Task Management
        </h1>
        <p class="homeview-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, maxime!</p>
        <RouterLink to="/tasks">
            <Button label="Go to start"/>
        </RouterLink>
    </div>
</template>

<style scoped>
    .homeview-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
    }

    .homeview-container svg {
        color: var(--primary-color);
    }

    .homeview-title {
        display: flex;
        align-items: center;
        font-size: var(--fs-xl);
    }

    .homeview-description {
        width: 80%;
    }
   
</style>