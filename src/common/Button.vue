<script>
    /* 
    Reusable component Button 
    The apparience of the component can be change depending of the properties received
    
    @param {String} scale: Allow to change the size of the icon [string]
    @param {String} variant: Allow to change the appariance of the component similar to css famework bootstrap [string]
    @param {String} label: Text show in the button [string]
    @param {Boolean} radius: Indicate if the button has the border rounded completely [boolean]
    */
    export default {
        name: 'Button',
        props: ['label', 'icon', 'variant', 'radius', 'scale']
    }
    
</script>

<template>
    <button class="button" :class="[variant, radius]">
       <v-icon v-if="icon" :name="icon" :scale="scale"/>
        {{ label }}
    </button>
</template>

<style scoped>
    /* Get the specific styles of the component */
    @import '@/styles/common/button.css';
</style>