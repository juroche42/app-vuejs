<script setup>

import SumarizeOrderSection from '@/components/SumarizeOrderSection.vue'
import CheckoutElementCard from '@/components/CheckoutElementCard.vue'
import { computed } from 'vue'

const products = [
  {
    title: 'Chaussure',
    price: 100,
    quantity: 1,
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Manteau',
    price: 150,
    quantity: 1,
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Baskets',
    price: 80,
    quantity: 1,
    image: '/src/assets/logo.svg',
  },
]

let totalPrice = computed(() => {
  let total = 0
  products.forEach(product => {
    total += product.price * product.quantity
  })
  return total
})
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
    <div class="space-y-6">
      <CheckoutElementCard v-for="product in products" :key="product.title"
                           :title="product.title"
                           :price="product.price"
                           :quantity="product.quantity"
                           :image="product.image"
      />
      <SumarizeOrderSection :price="totalPrice"/>
    </div>
  </main>
</template>

<style scoped>

</style>
