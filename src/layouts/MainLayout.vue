<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="main-layout flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow py-7">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
