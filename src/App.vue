<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/section/HeaderSection.vue'
import FooterSection from '@/components/section/FooterSection.vue'
import { supabase } from '@/utils/supabase.js'

</script>

<template>
  <HeaderSection/>

  <RouterView />

  <FooterSection/>
</template>

<style scoped>

</style>
