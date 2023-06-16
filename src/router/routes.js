import TasksLayout from '@/layouts/TasksLayout.vue';
import RootLayout from '@/layouts/RootLayout.vue';

export const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: RootLayout
      }
    },

    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/tasks/TasksView.vue'),
      meta: {
        layout: TasksLayout
      }
    },

    {
      path: '/tasks/:task_id',
      name: 'task-details',
      component: () => import('../views/tasks/TaskDetailsView.vue'),
      meta: {
        layout: TasksLayout
      }
    },
  ]