<script>
    export default {
        name: 'TextArea',
        props: ['name', 'value', 'placeholder', 'label']
    }
</script>

<template>
    <div class="field" >
        <label v-if="label" :for="name" class="field-label">{{ label }}</label>
        <textarea class="field-textarea" :name="name" :placeholder="placeholder" :value="value"/>
    </div>
</template>

<style scoped>
    .field {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .field-label {
        width: 100%;
        padding: 3px 0;
    }

    .field-textarea {
        width: 100%;
        padding: 10px 20px;
        color: var(--font-color);
        height: 100px;
        resize: none;
        background-color: var(--background-secondary-color);
    }

    .field-textarea:focus {
        border-color: var(--primary-color);
    }
</style>