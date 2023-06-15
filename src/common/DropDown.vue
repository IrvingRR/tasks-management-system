<script>
    
    export default {
        name: 'Dropdown',
        props: ['label', 'options', 'text', 'required', 'modelValue', 'valueOption', 'selectFunction'],
        emits: ['update:modelValue'],

        data() {
            return {
                isOptionsActive: false,
                value: ''
            }
        },

        computed: {
            optionsActived() {
                if(this.isOptionsActive) return 'active';
            }
        },
        
        methods: {
            toggleOptions() {
                this.isOptionsActive = !this.isOptionsActive;
            },

            changeValue(value){
                this.selectFunction(value);
                this.value = value;
            }
        }
    }
</script>

<template>
    <div class="dropdown" @click="toggleOptions">
        <label v-if="label">
            {{ label }}
            <span class="dropdown-label-simbol">*</span>
        </label>
        <div class="dropdown-content">
            {{ value ? value : text }}
            <v-icon name="fa-chevron-down" scale="0.8"/>
            <ul class="dropdown-options" :class="[optionsActived]">
                <li v-for="option of options" :key="`${option.value}-index`" class="dropdown-options-option" @click="changeValue(option.label)">
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .dropdown {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .dropdown-label-simbol {
        color: var(--secondary-color);
    }
    .dropdown-content {
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        background-color: var(--background-secondary-color);
        border-radius: var(--radius);
        padding: 10px 20px;
    }

    .dropdown label {
        padding: 3px 0;
    }

    .dropdown svg {
        color: var(--primary-color);
    }

    .dropdown-options {
        position: absolute;
        top: 50px;
        left: 0;
        border-radius: var(--radius);
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        transform: translateY(-5px);
        width: 100%;
        max-width: 200px;
        overflow: auto;
        background-color: var(--background-secondary-color);
        border-bottom: 1px solid var(--primary-color);
    }
    
    .dropdown-options.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .dropdown-options-option {
        width: 100%;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        transition: var(--transition);
    }

    .dropdown-options-option:hover {
        background-color: var(--primary-color);
    }
</style>