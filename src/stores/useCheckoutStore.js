import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCheckoutStore = defineStore('checkout', () => {
  const products = ref([]);

  const addProduct = (product) => {
    products.value.push(product);
  }

  const removeProduct = (productId) => {
    products.value = products.value.filter(product => product.id !== productId);
  }

  const clearProducts = () => {
    products.value = [];
  }

  const getProductsLength = computed(() => {
    return products.value.length;
  });

  return {
    products,
    addProduct,
    removeProduct,
    clearProducts,
    getProductsLength
  }
});
