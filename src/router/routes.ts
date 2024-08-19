import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LandingPage.vue') }],
  },

  {
    path: '/game',
    component: () => import('layouts/MainLayout.vue'),
    children: [ { path: '', component: () => import('pages/GameMenuPage.vue') },
                { path: 'create', component: () => import('pages/GameCreatorPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
