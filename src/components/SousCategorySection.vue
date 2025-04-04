<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '/src/assets/logo.svg',
  },
  description: {
    type: String,
    default: "Description de la category",
  }
})
</script>

<template>
  <a href="#" class="block border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img :src="props.image" :alt="props.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-semibold text-lg">{{props.title}}</h3>
      <p class="text-gray-600 text-sm">{{props.description}}</p>
    </div>
  </a>
</template>

<style scoped>

</style>
