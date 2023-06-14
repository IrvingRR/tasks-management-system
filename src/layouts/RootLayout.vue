<script>
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
    .rootlayout-container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-primary-color);
    }
</style>