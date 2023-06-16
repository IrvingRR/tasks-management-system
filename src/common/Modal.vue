<script>
    /* 
    Reusable component Modal 
    Allow to render a modal element with a dynamic content

    @param {Boolean} isModalActivated: Allow handle when the modal will be show or hidden
    @param {Fn} desactiveModal: Is the funcion which will be called to close the modal when the button is clicked
    */
   
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
    /* Get the specific styles of the component */
    @import '@/styles/common/modal.css';
</style>