<script setup>

import ProductCard from '@/components/card/ProductCard.vue'

const products = [
  {
    title: 'Manteau',
    price: 100,
    description: 'Un manteau élégant pour l\'hiver',
    image: '/src/assets/logo.svg',
  },
  {
    title: 'Baskets',
    price: 80,
    description: 'Des baskets confortables pour le quotidien',
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
    description: 'Des bottes robustes pour les randonnées',
    image: '/src/assets/logo.svg',
  },
]
</script>

<template>
  <section class="flex-1">
    <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.title"
                   :title="product.title"
                   :price="product.price"
                   :description="product.description"
                   :image="product.image"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
