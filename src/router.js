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
            name: 'packages.list'
          },
          children: [
            {
              path: 'list',
              name: 'packages.list',
              component: () => import('@/views/packages/ListContainer.vue')
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
          path: 'applications',
          name: 'applications',
          component: () => import('@/views/applications/ApplicationsContainer.vue'),
          redirect: {
            name: 'applications.languages'
          },
          children: [
            {
              path: 'languages',
              name: 'applications.languages',
              component: () => import('@/views/applications/LanguagesContainer.vue')
            },
            {
              path: 'validator',
              name: 'applications.validator',
              component: () => import('@/views/applications/ValidatorContainer.vue')
            },
            {
              path: '*',
              redirect: {
                name: 'applications'
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
