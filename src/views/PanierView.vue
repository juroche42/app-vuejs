<script setup>

import SumarizeOrderSection from '@/components/SumarizeOrderSection.vue'
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
    <div class="space-y-6">
      <!-- Article -->
      <div class="flex items-center justify-between border-b pb-4">
        <div class="flex items-center gap-4">
          <img src="https://via.placeholder.com/100" class="w-20 h-20 object-cover rounded" alt="Produit">
          <div>
            <p class="font-medium">Chaussure Cuir</p>
            <p class="text-gray-500 text-sm">Pointure : 41</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold">89,99 €</p>
          <button class="text-red-500 text-sm hover:underline mt-1">Supprimer</button>
        </div>
      </div>
      <SumarizeOrderSection/>
    </div>
  </main>
</template>

<style scoped>

</style>
