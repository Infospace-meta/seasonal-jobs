<template>
  <div class="relative">
    <div class="inset-0 bg-white opacity-100">
      <Hero />
    </div>

    <div class="bg-white">
      <HomeApplicationProcess />
      <aboutus />
      <HomeAboutYou />
      <HomeCards />
      
      <Calltoaction />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import HomeApplicationProcess from "../components/HomeApplicationProcess.vue";
import aboutus from "../components/aboutus.vue";
import Calltoaction from "../components/calltoaction.vue";
import HomeCards from "../components/HomeCards.vue";
import HomeAboutYou from "../components/HomeAboutYou.vue";
</script>
