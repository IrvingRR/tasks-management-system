<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: 'TaskItem',
        components: { RouterLink }
    }
</script>

<template>
    <RouterLink to="/" class="task-item">
        <div class="task-item-header">
            <h3 class="task-item-header-title">Create new feature</h3>
        </div>
        <div class="task-item-body">
            <div class="task-item-information">
                <p class="task-item-information-date">Due 19 Aug 2021</p>
                <span class="task-item-information-status pending">
                    <v-icon name="fa-circle" scale="0.5"/>
                    Pending
                </span>
            </div>
        </div>
        <div class="tasks-item-tasks mobile">
            <span class="tasks-item-task">Css</span>
            <span class="tasks-item-task">HTML</span>
        </div>
    </RouterLink>
</template>

<style scoped>
/* Task Item */
    .task-item {
        width: 100%;
        border-radius: var(--radius);
        padding: 20px;
        background-color: var(--background-secondary-color);
        color: var(--font-color);
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: var(--initial-border);
    }

    .task-item:hover {
        transform: translateY(-3px);
        border-color: var(--primary-color);
    }

    .task-item-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .task-item-information {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .task-item-information-date {
        color: var(--gray-color);
    }

    .task-item-information-status {
        width: 100px;
        border-radius: var(--radius);
        padding: 10px 20px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    /* Status Completed */
    .task-item-information-status.completed {
        background-color: var(--status-completed-color);
        color: var(--status-completed-letter-color);
    }
    
    /* Status Pending */
    .task-item-information-status.pending {
        background-color: var(--status-pending-color);
        color: var(--status-pending-letter-color);
    }

    .tasks-item-tasks {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-height: 90px;
        overflow: auto;
        padding-top: 10px;
    }

    .tasks-item-task {
        padding: 10px;
        border-radius: var(--radius);
        text-align: center;
        background-color: var(--background-primary-color);
        color: var(--font-color);
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
        .mobile {
            display: none;
        }
        .task-item {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .task-item-information {
            gap: 20px;
        }
    }
</style>