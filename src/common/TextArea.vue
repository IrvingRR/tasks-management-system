<script>
    export default {
        name: 'TextArea',
        props: ['label', 'modelValue'],
        emits: ['update:modelValue'],
    }
</script>

<template>
    <div class="field" >
        <label v-if="label" class="field-label">{{ label }}</label>
        <textarea class="field-textarea" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<style scoped>
    @import '@/styles/common/textarea.css';
</style>