// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';  // Example HomePage component
import ConfirmationPage from '../pages/ConfirmationPage.vue';  // Your confirmation page component
import CloudServicesPage from '../pages/CloudServicesPage.vue';
import EditServicePage from '../pages/EditServicePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: ConfirmationPage
  },
  {
    path: '/services',
    name: 'Services',
    component: CloudServicesPage
  },
  {
    path: '/edit-service',
    name: 'Edit-Services',
    component: EditServicePage
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory("/"),  
  routes
});

export default router;
