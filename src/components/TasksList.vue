<script>

    import TaskItem from '@/components/TaskItem.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'TasksList',
        components: { TaskItem },
        computed: {
            ...mapState(['tasks']),
        }
    
    }
</script>

<template>
    <div class="tasks-list" v-if="tasks.length > 0">
        <TaskItem v-for="task of tasks" :key="task.id" :data="task"/>
    </div>
</template>

<style scoped>
    @import '@/styles/components/taskList.css';
</style>