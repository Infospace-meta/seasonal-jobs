<template>
  <div class="relative">
    <div class="inset-0 bg-white opacity-100">
      <Hero />
    </div>

    <div class="bg-white">
      <HomeApplicationProcess />
      <HomeAboutYou />
      <HomeCards />
      <abouthome />
      <Calltoaction />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import HomeApplicationProcess from "../components/HomeApplicationProcess.vue";
import abouthome from "../components/abouthome.vue";
import Calltoaction from "../components/calltoaction.vue";
import HomeCards from "../components/HomeCards.vue";
import HomeAboutYou from "../components/HomeAboutYou.vue";
</script>
