<script>

    import Sidebar from '@/components/Sidebar.vue';

    export default {
        name: 'TasksLayout',
        components: { Sidebar }
    }
</script>

<template>
    <div class="tasks-layout">
        <Sidebar/>
        <main class="tasks-layout-content">
            <slot/>
        </main>
    </div>
</template>
<style scoped>
    @import '@/styles/layouts/tasksLayout.css';
</style>