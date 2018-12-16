import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const appRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
});

appRouter.addRoutes([
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/:city/sales',
    name: 'sales',
    component: () => import('@/views/Sales.vue'),
    props: true,
  },
  {
    path: '/:city/shops',
    name: 'shops',
    component: () => import('@/views/Shops.vue'),
    props: true,
  },
]);

export default appRouter;
