<script setup>

import FilterSection from '@/components/FilterSection.vue'
import ProductListSection from '@/components/ProductListSection.vue'
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row gap-8">
      <FilterSection/>
      <ProductListSection/>
    </div>
  </main>
</template>

<style scoped>

</style>
