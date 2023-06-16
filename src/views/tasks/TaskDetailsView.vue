<script>

    import Status from '@/common/Status.vue';
    import Button from '@/common/Button.vue';
    import Modal from '@/common/Modal.vue';
    import FormEditTask from '@/components/FormEditTask.vue';
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'TaskDetailsView',
        components: { Status, Button, Modal, FormEditTask },

        data() {
            return {
                isModalActivated: false
            }
        },

        computed: {
            ...mapState(['taskSelected']),

            tagsArray() {
                if(this.taskSelected.tags) {
                    return this.taskSelected.tags.split(',');
                }
            },

            dateDueValue() {
                if(this.taskSelected.due_date) {
                    return `Date due ${this.taskSelected.due_date}`
                } else {
                    return 'No due date';
                }
            },

            descriptionValue() {
                if(this.taskSelected.description) {
                    return this.taskSelected.description;
                } else {
                    return 'No description';
                }
            },

            commentsValue() {
                if(this.taskSelected.comments) {
                    return this.taskSelected.comments;
                } else {
                    return 'No comments';
                }
            },
        },

        methods: {

            ...mapActions(['getTaskByIdAction', 'deleteTaskByIdAction']),

            activeModal() {
                this.isModalActivated = true;
            },

            desactiveModal() {
                this.isModalActivated = false;
            },

            deleteTask(id) {
                this.deleteTaskByIdAction(id);
                this.$router.push('/tasks');
            },

            backPage() {
                this.$router.go(-1);
            }
        },

        async mounted() {
            this.getTaskByIdAction(this.$route.params.task_id);
        }, 
    }

</script>

<template>
    <Modal :isModalActivated="isModalActivated" :desactiveModal="desactiveModal">
        <FormEditTask :isModalActivated="isModalActivated" :desactiveModal="desactiveModal"/>
    </Modal>
    <div class="task-details-container">
        <div class="task-details-container-back-action">
            <Button icon="fa-chevron-left" variant="transparent" label="Back" scale="0.8" @click="backPage"/>
        </div>
        <header class="task-details-header">
            <div class="task-details-header-status">
                <p class="task-details-header-status-text">Status</p>
                <Status :status="taskSelected.is_completed"/>
            </div>
            <div class="task-details-header-actions desktop">
                <Button label="Edit" @click="activeModal"/>
                <Button label="Delete" variant="secondary" @click="deleteTask(taskSelected.id)"/>
            </div>
        </header>
        <div class="task-details-body">
            <h3>{{ taskSelected.title }}</h3>
            <p class="task-details-body-date">{{ dateDueValue }}</p>
            <p>{{ descriptionValue }}</p>
            <div class="task-details-body-comments">
                <h4>Comments</h4>
                {{ commentsValue }}
            </div>
            <div class="task-details-body-tags">
                <span v-for="(tag, index) of tagsArray" :key="`${tag}-${index}`" class="task-details-body-tag">{{ tag }}</span>
                <p class="tasks-details-tags-no-tags" v-if="!taskSelected.tags">No tags in this task</p>
            </div>
        </div>

        <div class="task-details-actions mobile">
            <h4>Actions</h4>
            <div class="task-details-actions-buttons">
                <Button label="Edit" @click="activeModal"/>
                <Button label="Delete" variant="secondary" @click="deleteTask(taskSelected.id)"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '@/styles/views/taskDetails.css';
</style>
