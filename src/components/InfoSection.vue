<script setup>

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
  }
})

</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-4">{{props.title}}</h2>
    <p class="text-gray-600 mb-4">{{props.description}}</p>
    <p class="text-2xl font-bold mb-4">{{props.price}} €</p>

    <div class="mb-4">
      <label class="block font-medium mb-1">Pointure</label>
      <select class="w-full border px-3 py-2 rounded">
        <option>39</option>
        <option>40</option>
        <option>41</option>
        <option>42</option>
      </select>
    </div>

    <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">Ajouter au panier</button>
  </div>
</template>

<style scoped>

</style>
