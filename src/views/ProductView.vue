<script setup>

import InfoSection from '@/components/section/InfoSection.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Produit',
  },
  description: {
    type: String,
    default: 'Description du produit',
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: '/src/assets/logo.svg',
  },
  size: {
    type: Array,
    default: () => ['39', '40', '41', '42'],
  }
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
    <div>
      <img :src="props.image" class="w-full rounded-xl object-cover" alt="Produit">
    </div>
    <InfoSection :title="props.title" :description="props.description" :price="props.price" :size="props.size"/>
  </main>
</template>

<style scoped>

</style>
