<script>

    import TaskItem from '@/components/TaskItem.vue';

    export default {
        name: 'TasksList',
        components: { TaskItem }
    }
</script>

<template>
    <div class="tasks-list">
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
    </div>
</template>

<style scoped>
/* Tasks list */
    .tasks-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px 0;
    }

</style>