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
    .tasks-layout {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--background-primary-color);
    }

    .tasks-layout-content {
        width: 100%;
        padding: 20px;
    }

    @media only screen and (min-width: 1024px) {
        .tasks-layout {
            flex-direction: row;
        }

        .tasks-layout-content {
            width: 70%;
            margin: auto;
            height: 100vh;
            overflow: auto;
        }
    }
</style>