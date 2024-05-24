<template>
  <div class="min-h-screen lg:bg-hero bg-no-repeat lg:bg-contain bg-center bg-fixed">
    <Header />
    <div class="mt-14 lg:mt-28">
      <RouterView />
    </div>
    <Footer />
  </div>
  <div id="pagetop" class="fixed right-1 bottom-0  bg-gray-600 mx-7 my-10 bg-opacity-40 rounded-md"  @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<style scoped></style>
