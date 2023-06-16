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
    @import '@/styles/common/modal.css';
</style>