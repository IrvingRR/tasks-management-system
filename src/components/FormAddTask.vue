<script>

    import Input from '@/common/Input.vue';
    import DropDown from '@/common/DropDown.vue';
    import TextArea from '@/common/TextArea.vue';
    import Button from '@/common/Button.vue';
    import { mapActions } from 'vuex';
    import { toast } from 'vue3-toastify';
    import { getInvalidFields } from '@/helpers/getInvalidFields';
    import { prepareData } from '@/helpers/prepareData';

    export default {
        name: 'FormAddTask',
        components: { Input, DropDown, TextArea, Button },
        props: ['isModalActivated', 'desactiveModal'],

        data() {
            return {
                formOptions: [
                    { label: 'Completed', value: "1"},
                    { label: 'Pending', value: "0"}
                ],

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

        computed: {
            modalActiveClass() {
                if(this.isModalActivated) {
                    return 'active';
                }
            }
        },

        methods: {
            ...mapActions(['createTaskAction']),

            handleSubmit() {

                this.invalidFields = getInvalidFields(this.formValues);

                if(this.invalidFields.length > 0) {
                   return toast.error(`Please fill the required fields with the symbol (*): ${this.invalidFields}`, {
                        autoClose: 3000,
                    });
                }

                const data = prepareData(this.formValues);
                this.createTaskAction(data);
                this.desactiveModal();
                this.formValues = {
                    title: { value: '', required: true},
                    is_completed: { value: '', required: true},
                    due_date: { value: '', required: false },
                    comments: { value: '', required: false },
                    description: { value: '', required: false },
                    tags: { value: [], required: false }
                };

            },

            changeStatus(status) {
                this.formValues.is_completed.value = status;
            },

            addNewTag(tag) {
                if(tag) {
                    this.formValues.tags.value.push(tag);
                    this.tag = '';
                }
            },

            removeTag(tag) {
                this.formValues.tags.value = this.formValues.tags.value.filter(item => item !== tag);
            }
        }
    }
</script>

<template>
    <form class="form" :class="[modalActiveClass]" @submit.prevent="handleSubmit">
        <div class="form-header">
            <h2>New Task</h2>
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
            <Button label="Create task"/>
        </div>
    </form>
</template>

<style scoped>
    @import '@/styles/components/form.css';
</style>