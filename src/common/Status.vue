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
    .status {
        width: 120px;
        border-radius: var(--radius);
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: var(--fs-s);
    }

    /* Status Completed */
    .status.completed {
        background-color: var(--status-completed-color);
        color: var(--status-completed-letter-color);
    }
    
    /* Status Pending */
    .status.pending {
        background-color: var(--status-pending-color);
        color: var(--status-pending-letter-color);
    }
</style>