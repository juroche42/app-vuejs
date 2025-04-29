<script setup>
import SumarizeOrderSection from '@/components/section/SumarizeOrderSection.vue'
import CheckoutElementCard from '@/components/card/CheckoutElementCard.vue'
import { computed } from 'vue'
import { useCheckoutStore } from '@/stores/useCheckoutStore.js'


const { getProducts, removeProduct } = useCheckoutStore()

let totalPrice = computed(() => {
  let total = 0
  getProducts.forEach((product) => {
    total += product.price * product.quantity
  })
  return total
})

const deleteCheckoutElement = (index) => {
  removeProduct(index)
}

</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
    <div class="space-y-6">
      <CheckoutElementCard
        v-for="product in getProducts"
        :key="product.title"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :quantity="product.quantity"
        :image="product.image"
        @delete-checkout-element="deleteCheckoutElement(getProducts.indexOf(product))"
      />
      <SumarizeOrderSection :price="totalPrice" />
    </div>
  </main>
</template>

<style scoped></style>
