<script>

    import Input from '@/common/Input.vue';
    import DropDown from '@/common/DropDown.vue';
    import TextArea from '@/common/TextArea.vue';
    import Button from '@/common/Button.vue';

    export default {
        name: 'FormAddTask',
        components: { Input, DropDown, TextArea, Button },
        props: ['isModalActivated'],
        data() {
            return {
                formOptions: [
                    { label: 'Completed', value: 'completed' },
                    {  label: 'Pending', value: 'pending'}
                ]
            }
        },
        computed: {
            modalActiveClass() {
                if(this.isModalActivated) {
                    return 'active';
                }
            }
        }
    }
</script>

<template>
    <form class="form" :class="[modalActiveClass]">
        <div class="form-header">
            <h2>New Task</h2>
        </div>
        <Input type="text" label="Title" name="title" placeholder="Title" :required="true"/>
        <label>
            <DropDown text="Select status" label="status" :options="formOptions" :required="true"/>
        </label>
        <Input type="date" label="Date" name="date"/>
        <TextArea label="Comments" name="comments" placeholder="Write your comments here"/>
        <TextArea label="Description" name="description" placeholder="Type a description"/>
        <div class="form-add-tasks">
            <label>Tags</label>
            <div class="form-tags">
                <span class="form-tags-tag">HTML</span>
                <span class="form-tags-tag">CSS</span>
                <span class="form-tags-tag">React</span>
            </div>
            <Input type="text" name="tag" placeholder="New tag"/>
            <Button label="Add tag" variant="secondary"/>
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
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
        .form {
            width: 400px;
        }
    }
</style>