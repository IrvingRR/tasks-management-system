<script>
    import { RouterLink } from 'vue-router';
    import Status from '@/common/Status.vue';

    export default {
        name: 'TaskItem',
        components: { RouterLink, Status }
    }
</script>

<template>
    <RouterLink to="/tasks/8" class="task-item">
        <div class="task-item-header">
            <h3 class="task-item-header-title">Create new feature</h3>
        </div>
        <div class="task-item-body">
            <div class="task-item-information">
                <p class="task-item-information-date">Due 19 Aug 2021</p>
                <Status status="pending"/>
            </div>
        </div>
        <div class="tasks-item-tags mobile">
            <span class="tasks-item-tag">Css</span>
            <span class="tasks-item-tag">HTML</span>
        </div>
    </RouterLink>
</template>

<style scoped>
/* Task Item */
    .task-item {
        width: 100%;
        border-radius: var(--radius);
        padding: 10px;
        background-color: var(--background-secondary-color);
        color: var(--font-color);
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: var(--initial-border);
        font-size: var(--fs-s);
    }

    .task-item-header-title {
        font-size: var(--fs-m);
        font-weight: normal;
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

    .tasks-item-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-height: 90px;
        overflow: auto;
        padding-top: 10px;
    }

    .tasks-item-tag {
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