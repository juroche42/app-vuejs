<script setup>

import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <section class="flex-1">
    <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard title="Sneaker" price="20"/>
      <ProductCard title="Sneaker" price="20"/>
      <ProductCard title="Sneaker" price="20"/>
    </div>
  </section>
</template>

<style scoped>

</style>
