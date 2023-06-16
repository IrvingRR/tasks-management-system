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
    @import '@/styles/views/home.css';
</style>