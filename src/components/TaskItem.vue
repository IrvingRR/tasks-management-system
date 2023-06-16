<script>
    /* 
    This component handle and show the information of the every task
    the information is static

    @param {Object} data: This property content the information of the task which will be displayed
    */
    import { RouterLink } from 'vue-router';
    import Status from '@/common/Status.vue';

    export default {
        name: 'TaskItem',
        props: ['data'],
        components: { RouterLink, Status },
        computed: {
            // Transform the tags in array to can iterate in the template
            tagsArray() {
                if(this.data.tags) {
                    return this.data.tags.split(',');
                }
            },

            // Handle  the due date value to show a determine value in the template
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
    /* Get the specific styles of the component */
    @import '@/styles/components/taskItem.css';
</style>