import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CategoryContentView from '@/views/CategoryContentView.vue'
import PanierView from '@/views/PanierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/categoryContent',
      name: 'categoryContent',
      component: CategoryContentView,
    },
    {
      path: '/panier',
      name: 'panier',
      component: PanierView,
    }
  ],
})

export default router
