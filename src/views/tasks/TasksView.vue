<script>

    import Button from '@/common/Button.vue';

    export default {
        name: 'TasksView',
        components: { Button }
    }
</script>

<template>
    <div class="tasksview-container">
        <header class="tasksview-header">
            <div class="tasksview-header-information">
                <h2>Tasks</h2>
                <p>7 total tasks</p>
            </div>
            <div class="tasksview-header-actions">
                <Button label="New" icon="hi-solid-plus-circle"/>
            </div>
        </header>  
    </div>
</template>

<style scoped>

</style>