<template>
  <div class="min-h-screen bg-hero bg-no-repeat lg:bg-contain bg-center bg-fixed">
    <Header />
    <div class="mt-14 lg:mt-28">
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
