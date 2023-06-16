<script>
    import { RouterLink } from 'vue-router';
    import Status from '@/common/Status.vue';

    export default {
        name: 'TaskItem',
        props: ['data'],
        components: { RouterLink, Status },
        computed: {
            tagsArray() {
                if(this.data.tags) {
                    return this.data.tags.split(',');
                }
            },

            dateDueValue() {
                if(this.data.due_date) {
                    return `Date due ${this.data.due_date}`
                } else {
                    return 'No due date';
                }
            }
        }
    }
</script>

<template>
    <RouterLink :to="`/tasks/${data.id}`" class="task-item">
        <div class="task-item-header">
            <h3 class="task-item-header-title">{{ data.title }}</h3>
        </div>
        <div class="task-item-body">
            <div class="task-item-information">
                <p class="task-item-information-date">{{ dateDueValue }}</p>
                <Status :status="data.is_completed"/>
            </div>
        </div>
        
    </RouterLink>
</template>

<style scoped>
    @import '@/styles/components/taskItem.css';
</style>