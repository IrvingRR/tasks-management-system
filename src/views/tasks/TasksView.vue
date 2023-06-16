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

        async mounted() {
            this.getAllTasksAction();
        }, 
        
    }
</script>

<template>
    <Modal :isModalActivated="isModalActivated" :desactiveModal="desactiveModal">
        <FormAddTask :isModalActivated="isModalActivated" :desactiveModal="desactiveModal"/>
    </Modal>
    <div class="tasksview-container">
        <header class="tasksview-header">
            <div class="tasksview-header-information">
                <h2>Tasks</h2>
                <p class="mobile">{{ tasks.length }} total tasks</p>
                <p class="desktop">There are {{ tasks.length }} total tasks</p>
            </div>
            <div class="tasksview-header-actions">
                <Button class="mobile" label="New" icon="hi-solid-plus-circle" @click="activeModal"/>
                <Button class="desktop" label="New task" icon="hi-solid-plus-circle" @click="activeModal"/>
            </div>
        </header>  
        <TasksList :v-if="tasks.length > 0"/>
        <h3 class="tasksview-no-tasks" v-if="tasks.length === 0">No tasks yet</h3>
    </div>
</template>

<style scoped>
    @import '@/styles/views/tasksView.css';
</style>