<script>

      /* 
    This component handle the current information and execute the http request to update the current task
    
    @param {Boolean} isModalActivated: Allow to indicate if the modal component will be show or hidden
    @param {Fn} desactiveModal: Allow to hidden the modal when is executed
    */

    import { toast } from 'vue3-toastify';
    import Input from '@/common/Input.vue';
    import DropDown from '@/common/DropDown.vue';
    import TextArea from '@/common/TextArea.vue';
    import Button from '@/common/Button.vue';
    import { mapActions, mapState } from 'vuex';
    import { getTaskByIdService } from '@/services/tasks';
    import { getInvalidFields } from '@/helpers/getInvalidFields';
    import { prepareData } from '@/helpers/prepareData';

    export default {
        name: 'FormEditTask',
        components: { Input, DropDown, TextArea, Button },
        props: ['isModalActivated', 'desactiveModal'],
        computed: {
            ...mapState(['taskSelected']),

            // Hanlde the isModalActivated param to apply the correct class
            modalActiveClass() {
                if(this.isModalActivated) {
                    return 'active';
                }
            },
        },

        data() {
            return {
                // Options will be show in the dropdown to handle the satus
                formOptions: [
                    { label: 'Completed', value: "1"},
                    { label: 'Pending', value: "0"}
                ],

                // Initial values of the every element in the form, this way we avoid the error when the template try to acces to values
                formValues: {
                    title: { value: '', required: true},
                    is_completed: { value: '', required: true},
                    due_date: { value: '', required: false },
                    comments: { value: '', required: false },
                    description: { value: '', required: false },
                    tags: { value: [], required: false }
                },

                tag: '',
                invalidFields: []
            }
        },

        methods: {

            ...mapActions(['updateTaskAction']),

            // This method handle the values and execute the action to update the current task
            handleSubmit() {
                this.invalidFields = getInvalidFields(this.formValues);

                // If some field is invalid will show a toast with a error message
                if(this.invalidFields.length > 0) {
                   return toast.error(`Please fill the required fields with the symbol (*): ${this.invalidFields}`, {
                        autoClose: 3000,
                    });
                }

                //Prepare the data to has the correct format before to send the request
                const data = prepareData(this.formValues);
                const params = {
                    id: this.$route.params.task_id,
                    task: data
                };

                this.updateTaskAction(params);
                this.desactiveModal();
                
            },

            // Function passes as @param selectFunction in the dropdown to handle the value
            changeStatus(status) {
                this.formValues.is_completed.value = status;
            },

            // Allow to add a new task to property tags of the form values
            addNewTag(tag) {
                if(tag) {
                    this.formValues.tags.value.push(tag);
                    this.tag = '';
                }
            },

            // Allow to remove a specific task from property tags of the form values
            removeTag(tag) {
                this.formValues.tags.value = this.formValues.tags.value.filter(item => item !== tag);
            }
        },    
        
        // Before the component is mounted we assign the values of the current task to every element of form
        async beforeMount() {
            // Get information of the current task using the service
            const [currentTask] = await getTaskByIdService(this.$route.params.task_id);
            
            // Setting the current values
            this.formValues = {
                title: { value: currentTask.title, required: true},
                is_completed: { value: currentTask.is_completed, required: true},
                due_date: { value: currentTask.due_date, required: false },
                comments: { value: currentTask.comments, required: false },
                description: { value: currentTask.description, required: false },
                tags: { 
                    value: currentTask.tags ? currentTask.tags.split(',') : [], 
                    required: false 
                }
            }
        }
       
    }
</script>

<template>
    <form class="form" :class="[modalActiveClass]" @submit.prevent="handleSubmit">
        <div class="form-header">
            <h2>Edit Task</h2>
        </div>
        <Input type="text" label="Title" name="title" placeholder="Title" v-model="formValues.title.value" :isRequired="formValues.title.required"/>
        <label>
            <DropDown text="Select status" label="Is completed" :options="formOptions" :selectFunction="changeStatus" :value="formValues.is_completed.value"/>
        </label>
        <Input type="date" label="Due date" name="date" v-model="formValues.due_date.value"/>
        <TextArea label="Comments" name="comments" placeholder="Write your comments here" v-model="formValues.comments.value"/>
        <TextArea label="Description" name="description" placeholder="Type a description" v-model="formValues.description.value"/>
        <div class="form-add-tasks">
            <label>Tags</label>
            <span class="form-add-tasks-no-tasks-text" v-if="formValues.tags.length === 0">No tags</span>
            <div v-if="formValues.tags.value.length > 0" class="form-tags">
                <span v-for="(tag, index) of formValues.tags.value" :key="`${tag}-${index}`" class="form-tags-tag">
                    <button type="button" class="form-tags-tag-button" @click="removeTag(tag)">
                        <v-icon name="fa-times"/>
                    </button>
                    {{ tag }}
                </span>
            </div>
            <Input type="text" name="tag" placeholder="New tag" v-model="tag"/>
            <Button type="button" label="Add tag" variant="secondary" @click.prevent="addNewTag(tag)"/>
            <Button label="Edit task"/>
        </div>
    </form>
</template>

<style scoped>
    /* Get the specific styles of the component */
    @import '@/styles/components/form.css';
</style>