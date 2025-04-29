import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { supabase } from '@/utils/supabase.js'

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  const allProducts = computed(() => {
    return products.value;
  });

  async function getAllProducts() {
    const { data, error } = await supabase.from('products').select()
    if (error) {
      console.error('Error fetching products:', error);
      return;
    }
    products.value = data;
    return products;
  }

  function getAllProductsByCategory(category) {
    //api supabase
  }

  return {
    allProducts,
    getAllProducts,
  }
});
