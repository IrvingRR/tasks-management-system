<script>

    import { mapActions, mapState } from 'vuex';

    import Button from '@/common/Button.vue';
    import DropDown from '@/common/DropDown.vue';
    import TasksList from '@/components/TasksList.vue';
    import FormAddTask from '@/components/FormAddTask.vue';
    import Modal from '@/common/Modal.vue';

    export default {
        name: 'TasksView',
        components: { Button, DropDown, TasksList, FormAddTask, Modal },
        data() {
            return {
                filterOptions: [
                    { label: 'Completed', value: 'completed' },
                    { label: 'Pending', value: 'pending' }
                ],
                isModalActivated: false
            }
        },

        computed: {
            ...mapState(['tasks'])
        },  

        methods: {

            ...mapActions(['getAllTasksAction']),  

            activeModal() {
                this.isModalActivated = true;
            },

            desactiveModal() {
                this.isModalActivated = false;
            }
        },

        async created() {
            this.getAllTasksAction();
        }, 
    }
</script>

<template>
    <Modal :isModalActivated="isModalActivated" :desactiveModal="desactiveModal">
        <FormAddTask :isModalActivated="isModalActivated"/>
    </Modal>
    <div class="tasksview-container">
        <header class="tasksview-header">
            <div class="tasksview-header-information">
                <h2>Tasks</h2>
                <p class="mobile">7 total tasks</p>
                <p class="desktop">There are 7 total tasks</p>
            </div>
            <div class="tasksview-header-actions">
                <DropDown class="mobile" text="Filter" :options="filterOptions"/>
                <DropDown class="desktop" text="Filter by status" :options="filterOptions"/>
                <Button class="mobile" label="New" icon="hi-solid-plus-circle" @click="activeModal"/>
                <Button class="desktop" label="New task" icon="hi-solid-plus-circle" @click="activeModal"/>
            </div>
        </header>  
        <TasksList/>
    </div>
</template>

<style scoped>
    .tasksview-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .tasksview-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .tasksview-header-actions {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .desktop {
        display: none;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
        }
    }

</style>