<script setup>
import { useCheckoutStore } from '@/stores/useCheckoutStore.js'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: 'Description par défaut',
  },
  image: {
    type: String,
    default: '/src/assets/logo.svg',
  },
})

const { addProduct } = useCheckoutStore()

const addProductInCard = () => {
  const product = {
    id: 1,
    title: props.title,
    price: props.price,
    description: props.description,
    image: props.image,
  }
  addProduct(product)
}
</script>

<template>
  <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition text-center">
    <a href="/product">
      <img :src="props.image" :alt="props.title" class="w-full h-60 object-cover" />
      <div class="p-4">
        <h4 class="font-semibold text-lg">{{ props.title }}</h4>
        <p class="text-gray-600">{{ props.description }}</p>
        <p class="font-bold mt-2">{{ props.price }} €</p>
      </div>
    </a>
    <button class="bg-blue-600 rounded-2xl px-4 py-2 text-white mb-4" @click="addProductInCard">Ajouter au panier</button>
  </div>
</template>

<style scoped></style>
