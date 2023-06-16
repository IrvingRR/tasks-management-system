<script>

    import TaskItem from '@/components/TaskItem.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'TasksList',
        components: { TaskItem },
        computed: {
            ...mapState(['tasks'])
        }
    }
</script>

<template>
    <div class="tasks-list">
        <TaskItem v-for="task of tasks" :key="task.id" :data="task"/>
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