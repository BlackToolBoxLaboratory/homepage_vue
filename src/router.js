import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: '/vue/',
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/MainContainer.vue'),
      redirect: {
        name: 'about'
      },
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutContainer.vue')
        },

        {
          path: 'packages',
          name: 'packages',
          component: () => import('@/views/packages/PackagesContainer.vue'),
          redirect: {
            name: 'package.languages'
          },
          children: [
            {
              path: 'languages',
              name: 'package.languages',
              component: () => import('@/views/packages/LanguagesContainer.vue')
            },
            {
              path: 'validator',
              name: 'package.validator',
              component: () => import('@/views/packages/ValidatorContainer.vue')
            },
            {
              path: '*',
              redirect: {
                name: 'packages'
              }
            }
          ]
        },

        {
          path: '*',
          redirect: {
            name: 'root'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: {
        name: 'root'
      }
    }
  ]
})

export default router
