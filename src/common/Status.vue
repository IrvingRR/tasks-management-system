<script>
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
    @import '@/styles/common/status.css';
</style>