<script>
    /* 
    Reusable component DropDown 
    Render a component with multiple options, receive different properties to work
    
    @param {Array} options: Is the list of options which will be show in the component when is activated - Example { label: "Option", value: "option" }
    @param {Boolean} required: Allow indicate ig the component value is required and show a simbol (*) 
    @param {String} label: Text show in a label tag above of the dropdown 
    @param {String} text: Text show in the dropdown like placeholder 
    @param {String} modelValue: Allow create the conexion between the state value and the component value
    @param {Fn} selectFunction: Function which will be called when an specific option is selected
    */
    
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
    /* Get the specific styles of the component */
    @import '@/styles/common/dropdown.css';
</style>