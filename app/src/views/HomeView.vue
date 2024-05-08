<template>
  <div class="relative">
    <div class="inset-0 bg-white opacity-90">
      <Hero />
    </div>
    <div
      class="absolute z-10 px-2 flex flex-col justify-center w-full items-center"
    >
      <Calltoaction />
    </div>
    <div class="bg-white opacity-90 pt-64">
      <HomeRegistrationProcess />
      <!-- <HomeCards/> -->
      <abouthome />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import HomeRegistrationProcess from "../components/HomeRegistrationProcess.vue";
import abouthome from "../components/abouthome.vue";
import Calltoaction from "../components/calltoaction.vue";
import HomeCards from "../components/HomeCards.vue";
</script>
