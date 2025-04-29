<script setup>

import { useCheckoutStore } from '@/stores/useCheckoutStore.js'

const menuItems = [
  { name: 'Accueil', link: '/' },
  { name: 'Nouveautés', link: '/category/new' },
  { name: 'Homme', link: '/categories' },
  { name: 'Femme', link: '/categories' },
  { name: 'Contact', link: '/' },
]

const checkoutStore = useCheckoutStore();

</script>

<template>
  <header class="border-b shadow-sm sticky top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
      <nav class="space-x-6 hidden md:flex">
        <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.link" class="hover:text-blue-600">
          {{ menuItem.name }}
        </router-link>
        <router-link to="/checkout" class="hover:text-blue-600">
          Panier ({{ checkoutStore.getProductsLength }})
        </router-link>
      </nav>
      <button class="md:hidden">☰</button>
    </div>
  </header>
</template>

<style scoped>

</style>
