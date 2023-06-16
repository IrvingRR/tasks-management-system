<script>

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
    @import '@/styles/common/input.css';
</style>