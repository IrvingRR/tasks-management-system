<script>
    /*
    This layout is used to render all the elements and components which has in the meta property of the route 'RootLayout'.
    Is used specifically to render the HomeView with a specific style and structure
    */

    export default {
        name: 'RootLayout'
    }
</script>

<template>
    <div class="rootlayout-container">
        <slot/>
    </div>
</template>

<style scoped>
    /* Get the specific styles of the component */
    @import '@/styles/layouts/rootLayout.css';
</style>