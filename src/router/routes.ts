import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: 'login', component: () => import('pages/LoginProcessPage.vue') },
      { path: 'register', component: () => import('pages/RegisterProcessPage.vue') },
    ]
  },

  {
    path: '/game',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GameMenuPage.vue') },
      { path: 'create', component: () => import('pages/GameCreatorPage.vue') },
      { path: 'myGames', component: () => import('pages/GameForPlayerPage.vue') },
      { path: 'createdGames', component: () => import('pages/CreatedGamesPage.vue') },
      { path: 'awaitingGames', component: () => import('pages/AwaitingGamesPage.vue') },
      { path: 'ongoingGames', component: () => import('pages/OngoingGamesPage.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
