<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from '@/components/shared/layout/AppHeader.vue';
import Footer from '@/components/shared/layout/AppFooter.vue';

onMounted(() => {
  try {
    let test = undefined;
    console.log(test.property);
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>