<template>
  <div class="relative">
    <div class="inset-0 bg-white opacity-90">
      <Hero />
    </div>
    <div
      class="absolute z-10 px-2 flex flex-col justify-center w-full items-center"
    >
      
    </div>
    <div class="bg-white opacity-90 pt-64">
      <HomeApplicationProcess />
      <HomeAboutYou/>
      <HomeCards/>
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
