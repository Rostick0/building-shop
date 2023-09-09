import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from './helper'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.main,
      name: 'MainView',
      component: () => import('@/views/MainView/MainView.vue')
    },
    {
      path: ROUTES.category + '/:name',
      name: 'CategoryView',
      component: () => import('@/views/CategoryView/CategoryView.vue')
    },
    {
      path: ROUTES.catalog + '/:name',
      name: 'CatalogView',
      component: () => import('@/views/CatalogView/CatalogView.vue')
    },
    {
      path: ROUTES.compare,
      name: 'CompareView',
      component: () => import('@/views/CompareView/CompareView.vue')
    },
    {
      path: ROUTES.contacts,
      name: 'ContactsView',
      component: () => import('@/views/ContactsView/ContactsView.vue')
    },
    {
      path: ROUTES.delivery,
      name: 'DeliveryView',
      component: () => import('@/views/DeliveryView/DeliveryView.vue')
    },
    {
      path: ROUTES.favorite,
      name: 'FavoriteView',
      component: () => import('@/views/FavoriteView/FavoriteView.vue')
    },
    {
      path: ROUTES.product + '/:id',
      name: 'ProductView',
      component: () => import('@/views/ProductView/ProductView.vue')
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
