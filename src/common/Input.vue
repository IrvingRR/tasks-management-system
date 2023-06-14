<script>

    export default {
        name: 'Input',
        props: ['type', 'name', 'placeholder', 'autoComplete', 'isValid', 'label', 'legend', 'required'],
    }
</script>

<template>
    <div class="field" >
        <label v-if="label" :for="name" class="field-label">
            {{ label }} 
            <span class="field-label-required-simbol" v-if="required">*</span>
        </label>
        <div class="field-content">
            <!-- <v-icon name="co-paw"/> -->
            <input :type="type" :name="name" :placeholder="placeholder" :autocomplete="autoComplete" class="field-content-input">
        </div>
        <div v-if="legend" class="field-legend" :class="isValid === false ? 'show' : ''">{{ legend }}</div>
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
    
    .field-legend.show {
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