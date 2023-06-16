<script>
    /* 
    Reusable component Status 
    Allow to render the status of the tasks depending of the is_completed value received
    if the value is 1 so the apparience will be completed
    if the value is 0 then the apparience will be pending

    @param {String} status: Value which will be used to handle the appariance and content of the element
    */

    export default {
        name: 'Status',
        props: ['status'],
        computed: {
            statusValue() {
                if(this.status == '1') {
                    return 'Completed'
                } else {
                    return 'Pending'
                }
            },
        }
    }
</script>

<template>
    <span class="status" :class="[statusValue.toLowerCase()]">
        <v-icon name="fa-circle" scale="0.5"/>
        {{ statusValue }}
    </span>
</template>

<style scoped>
    /* Get the specific styles of the component */
    @import '@/styles/common/status.css';
</style>