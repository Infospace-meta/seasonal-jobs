<template>
  <div class="relative">
    <div class="bg-white bg-opacity-100">
      <Hero />
    </div>

    <div class="bg-white">
      <HomeApplicationProcess />
      <aboutus />
      <HomeCards />
      <Rememberthis />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import HomeApplicationProcess from "../components/HomeApplicationProcess.vue";
import aboutus from "../components/aboutus.vue";
import HomeCards from "../components/HomeCards.vue";
import Rememberthis from "../components/Rememberthis.vue";
</script>
