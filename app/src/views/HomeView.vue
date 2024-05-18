<template>
  <div class="relative">
    <div class="inset-0 bg-white">
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
