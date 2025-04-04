<script setup>

import FilterSection from '@/components/FilterSection.vue'
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row gap-8">
      <FilterSection/>
      <!-- Liste des produits -->
      <section class="flex-1">
        <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
            <img src="https://via.placeholder.com/400x300" class="w-full h-56 object-cover" alt="Chaussure">
            <div class="p-4">
              <h3 class="font-semibold">Sneaker Sport</h3>
              <p class="text-gray-600 text-sm">Moderne et confortable</p>
              <p class="font-bold mt-1">69,99 €</p>
            </div>
          </div>
          <!-- Autres produits... -->
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>
