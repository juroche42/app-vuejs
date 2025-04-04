<script setup>

import SousCategorySection from '@/components/SousCategorySection.vue'
import { ref } from 'vue'

const categories = ref([
  {
    title: 'Chaussures',
    image: '/src/assets/logo.svg',
    description: 'Découvrez notre sélection de chaussures pour homme.',
  },
  {
    title: 'Vêtements',
    image: '/src/assets/logo.svg',
    description: 'Explorez notre gamme de vêtements pour homme.',
  },
  {
    title: 'Accessoires',
    image: '/src/assets/logo.svg',
    description: 'Trouvez les accessoires parfaits pour compléter votre look.',
  },
  {
    title: 'Bags',
    image: '/src/assets/logo.svg',
    description: 'Découvrez notre sélection de sacs pour homme.',
  },
])

</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <SousCategorySection v-for="category in categories" :key="category.title"
                           :title="category.title"
                           :image="category.image"
                           :description="category.description"
      />
    </section>
  </main>
</template>

<style scoped>

</style>
