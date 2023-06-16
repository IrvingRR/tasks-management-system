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

    .form {
        width: 100%;
        height: 100vh;
        background-color: var(--background-primary-color);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: var(--radius);
        overflow: auto;
        transition: var(--transition);
        transform: translateX(-100%);
    }
    
    .form.active {
        transform: translateX(0);
    }
    .form-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-header-close-button {
        background-color: transparent;
        padding: 0;
    }

    .form-header-close-button:hover {
        background-color: transparent;
    }

    .form-container.active .form {
        transform: translateX(0);
    }

    .form-add-tasks {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-height: 90px;
        overflow: auto;
    }

    .form-tags-tag {
        padding: 10px;
        border-radius: var(--radius);
        text-align: center;
        background-color: var(--background-secondary-color);
        color: var(--font-color);
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .form-tags-tag-button {
        width: 10px;
        height: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        background-color: var(--white-color);
        color: var(--background-primary-color);
        padding: 8px;
        position: absolute;
        top: 0;
        right: -10px;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
    }

    .form-tags-tag:hover .form-tags-tag-button {
        opacity: 1;
        visibility: visible;
    }

    .form-add-tasks-no-tasks-text {
        color: var(--gray-color);
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
        .form {
            width: 400px;
        }
    }
</style>