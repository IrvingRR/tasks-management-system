<script>
    
    export default {
        name: 'Dropdown',
        props: ['label', 'options'],
        computed: {
            optionsActived() {
                if(this.isOptionsActive) {
                    return 'active'
                } else {
                    return '';
                }
            }
        },
        data() {
            return {
                isOptionsActive: false
            }
        },

        methods: {
            toggleOptions() {
                this.isOptionsActive = !this.isOptionsActive;
            }
        }
    }
</script>

<template>
    <div class="dropdown" @click="toggleOptions">
        {{ label }}
        <v-icon name="fa-chevron-down" scale="0.8"/>
        <ul class="dropdown-options" :class="[optionsActived]">
            <li v-for="option of options" :key="`${option.value}-index`" class="dropdown-options-option">
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .dropdown {
        display: flex;
        background-color: transparent;
        position: relative;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .dropdown svg {
        color: var(--primary-color);
    }

    .dropdown-options {
        position: absolute;
        top: 30px;
        left: 0;
        border-radius: var(--radius);
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        transform: translateY(-5px);
        max-width: 200px;
        overflow: auto;
        background-color: var(--background-secondary-color);
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