<script>
    
    export default {
        name: 'Dropdown',
        props: ['label', 'options', 'text', 'required', 'modelValue', 'selectFunction', 'value'],
        emits: ['update:modelValue'],

        data() {
            return {
                isOptionsActive: false,
                optionSelected: this.value
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

            changeValue(value, label) {
                this.selectFunction(value);
                this.optionSelected = label;
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
            {{ optionSelected ? optionSelected :text }}
            <v-icon name="fa-chevron-down" scale="0.8"/>
            <ul class="dropdown-options" :class="[optionsActived]">
                <li v-for="option of options" :key="`${option.value}-index`" class="dropdown-options-option" @click="changeValue(option.value, option.label)">
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    @import '@/styles/common/dropdown.css';
</style>