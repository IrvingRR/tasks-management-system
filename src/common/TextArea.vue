<script>
    /* 
    Reusable component Text 
    Render a component textarea to handle the value and the appariance of the component depending of the properties and values
    the attributes are passed dynamically using the value $attrs
    
    @param {STRING} label: Text show in a tag label above of the textarea
    @param {STRING} modelValue: Allow create the conexion between the state value and the component value
    */
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
    /* Get the specific styles of the component */
    @import '@/styles/common/textarea.css';
</style>