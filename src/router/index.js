/*
This is the router created with vue-router to handle the different routes in the application
is separated in different files to clean the code
*/
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
