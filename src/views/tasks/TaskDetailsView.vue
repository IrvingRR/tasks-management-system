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
            <Button icon="fa-chevron-left" variant="transparent" label="Back" scale="0.8"/>
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

    .desktop {
        display: none;
    }
    .task-details-container {
        width: 100%;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .task-details-container-back-action {
        display: flex;
        align-items: center;
    }

    .task-details-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 20px;
        background-color: var(--background-secondary-color);
        border-radius: var(--radius);
    }

    .task-details-header-status {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        color: var(--gray-color);
    }

    .task-details-body {
        width: 100%;
        background-color: var(--background-secondary-color);
        border-radius: var(--radius);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .task-details-body-date {
        color: var(--gray-color);
    }

    .task-details-body-comments {
        padding: 10px;
        border-radius: var(--radius);
        background-color: var(--background-primary-color);
    }

    .task-details-body-comments h4 {
        padding-bottom: 10px;
    }

    .task-details-body-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-height: 90px;
        overflow: auto;
        padding-top: 10px;
    }

    .task-details-body-tag {
        padding: 10px;
        border-radius: var(--radius);
        text-align: center;
        background-color: var(--background-primary-color);
        color: var(--font-color);
    }

    .task-details-actions {
        width: 100%;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        background-color: var(--background-secondary-color);
        border-radius: var(--radius);
    }

    .task-details-actions-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .tasks-details-tags-no-tags {
        width: 100%;
        padding: 10px;
        border-radius: var(--radius);
        background-color: var(--background-primary-color);
    }

     /* Tablet */
     @media only screen and (min-width: 768px) {
        .mobile {
            display: none;
        }
        .desktop {
            display: flex;
        }

        .task-details-header-status {
            width: auto;
        }

        .task-details-header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
</style>
