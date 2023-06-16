<script>
    /* 
    Reusable component Input 
    Render a component input to handle the value and the appariance of the component depending of the properties and values
    the attributes are passed dynamically using the value $attrs
    
    @param {Boolean} isRequired: Allow indicate ig the component value is required and show a simbol (*)
    @param {String} label: Text show in a tag label above of the input 
    @param {String} modelValue: Allow create the conexion between the state value and the component value
    @param {Boolean} isValid: Allow to handle the apparience of the computed depending of the value, if is invalid the color will change
    @param {String} legend: Text which will be show under the input as a help message
    */

    export default {
        name: 'Input',
        props: ['label', 'modelValue', 'isValid', 'isRequired', 'legend'],
        emits: ['update:modelValue'],
        computed: {
            invalidClass() {
                if(this.isValid === false) return 'invalid-input';
            }
        }
    }
</script>

<template>
    <div class="field" >
        <label v-if="label" class="field-label">
            {{ label }} 
            <span class="field-label-required-simbol" v-if="isRequired">*</span>
        </label>
        <div class="field-content">
            <input v-bind="$attrs" class="field-content-input" :class="invalidClass" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        </div>
        <div v-if="legend" class="field-legend" :class="invalidClass">{{ legend }}</div>
    </div>
</template>

<style scoped>
    /* Get the specific styles of the component */
    @import '@/styles/common/input.css';
</style>