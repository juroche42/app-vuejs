<script setup>

const menuItems = [
  { name: 'Accueil', link: '/' },
  { name: 'Nouveautés', link: '/category/new' },
  { name: 'Homme', link: '/category' },
  { name: 'Femme', link: '/category' },
  { name: 'Contact', link: '/' },]

</script>

<template>
  <header class="border-b shadow-sm sticky top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
      <nav class="space-x-6 hidden md:flex">
        <a v-for="(menuItem, index) in menuItems" :key="index" :href="menuItem.link" class="hover:text-blue-600">
          {{ menuItem.name }}
        </a>
      </nav>
      <button class="md:hidden">☰</button>
    </div>
  </header>
</template>

<style scoped>

</style>
