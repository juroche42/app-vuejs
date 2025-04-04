<script setup>
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="text-right mt-10">
    <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{props.price}} €</span></p>
    <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
      Commander
    </button>
  </div>
</template>

<style scoped></style>
