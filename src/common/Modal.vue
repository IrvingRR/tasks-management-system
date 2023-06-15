<script>
    import Button from '../common/Button.vue'
    export default {
        components: { Button },
        props: ['isModalActivated', 'desactiveModal'],
        name: 'Modal',
        computed: {
            modalActiveClass() {
                if(this.isModalActivated) {
                    return 'active';
                } 
            }
        }
    }
</script>

<template>
    <div class="modal-container" :class="[modalActiveClass]">
        <Button type="button" icon="fa-times" class="form-header-close-button" scale="1.5" @click="desactiveModal"/>
        <slot/>
    </div>
</template>

<style scoped>
    .modal-container {
        width: 100%;
        min-height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.7);
        transition: var(--transition);
        opacity: 0;
        visibility: hidden;
    }

    .modal-container button {
        position: absolute;
        top: 10px;
        right: 0;
        background-color: transparent;
        z-index: 999;
    }

    .modal-container button:hover {
        background-color: transparent;
    }

    .modal-container.active {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
</style>