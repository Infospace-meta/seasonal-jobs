<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Hero />
    <div class="mt-4">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
