<script setup>

import SumarizeOrderSection from '@/components/SumarizeOrderSection.vue'
import CheckoutElementCard from '@/components/CheckoutElementCard.vue'
import { computed, ref } from 'vue'

const products = ref([
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
])

let totalPrice = computed(() => {
  let total = 0
  products.value.forEach(product => {
    total += product.price * product.quantity
  })
  return total
})

function deleteCheckoutElement(index) {
  products.value.splice(index, 1)
}

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
                           @delete-checkout-element="deleteCheckoutElement(products.indexOf(product))"
      />
      <SumarizeOrderSection :price="totalPrice"/>
    </div>
  </main>
</template>

<style scoped>

</style>
