<script setup>

import ProductCard from '@/components/card/ProductCard.vue'
import { useProductsStore } from '@/stores/useProductsStore.js'


const {getAllProducts} = useProductsStore()
console.log(getAllProducts)
/*const products = [
  {
    title: 'Manteau',
    price: 100,
    description: 'Un manteau élégant pour l\'hiver',
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Baskets',
    price: 80,
    description: 'Des baskets confortables',
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Sandales',
    price: 50,
    description: 'Des sandales légères pour l\'été',
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Bottes',
    price: 120,
    description: 'Des bottes robustes',
    image: '/src/assets/logo.svg',
  },
]*/
</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard v-for="product in getAllProducts" :key="product.title"
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :image="product.image"
          />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
