<template>
  <div class="min-h-screen bg-white">
    <Header />
    <div class="lg:mt-28 mt-14">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
