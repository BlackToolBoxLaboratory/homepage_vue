import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/vue/',
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/MainContainer.vue'),
      // children: [
      //   {
      //     path: 'shorten',
      //     name: 'root.shorten',
      //     component: () => import('@/views/ShortenContainer.vue')
      //   },
      //   {
      //     path: '*',
      //     redirect: '/shorten'
      //   }
      // ]
    },
    {
      path: '*',
      redirect: { 
        name: 'root' 
      }
    }
  ]
})

export default router;