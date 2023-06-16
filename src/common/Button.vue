<script>
    
    export default {
        name: 'Button',
        props: ['label', 'icon', 'variant', 'radius', 'size', 'scale']
    }
    
</script>

<template>
    <button class="button" :class="[variant, radius, size]">
       <v-icon v-if="icon" :name="icon" :scale="scale"/>
        {{ label }}
    </button>
</template>

<style scoped>
    @import '@/styles/common/button.css';
</style>