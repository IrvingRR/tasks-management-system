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

    .field {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .field-label {
        width: 100%;
        padding: 3px 0;
    }

    .field-content {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
    }

    .field-content svg {
        position: absolute;
        left: 10px;
    }

    .field-content-input {
        width: 100%;
        height: 40px;
        padding: 10px 20px;
        /* padding: 10px 20px 10px 40px; */
        background-color: var(--background-secondary-color);
        color: var(--font-color);
    }

    .field-content-input.invalid-input {
        border-color: var(--secondary-color);
        color: var(--secondary-color);
    }

    .field-content-input:focus {
        background-color: transparent;
        border-color: var(--primary-color);
    }

    .field-legend {
        width: 100%;
        color: var(--secondary-color);
        font-size: var(--fs-s);
        transform: translateY(-5px);
        opacity: 0;
        visibility: hidden;
        height: 0;
    }
    
    .field-legend.invalid-input {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        height: auto;
        transition: var(--transition);
    }

    .field-label-required-simbol {
        color: var(--secondary-color);
    }

</style>