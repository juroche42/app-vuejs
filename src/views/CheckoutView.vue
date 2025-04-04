<script setup>

import SumarizeOrderSection from '@/components/SumarizeOrderSection.vue'
import CheckoutElementCard from '@/components/CheckoutElementCard.vue'
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
    <div class="space-y-6">
      <CheckoutElementCard/>
      <SumarizeOrderSection/>
    </div>
  </main>
</template>

<style scoped>

</style>
