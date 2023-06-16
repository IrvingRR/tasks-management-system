<script>
    /*
    This layout is used to render all the elements and components which has in the meta property of the route 'TasksLayout'.
    Is used specifically to render the Tasks views with a specific style and structure as a sidebar and a main content
    */
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
    /* Get the specific styles of the component */
    @import '@/styles/layouts/tasksLayout.css';
</style>