<template>
  <div class="relative">
    <div class="bg-large-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div
        class="inset-0 bg-white opacity-90"
        style="height: calc(100vh + 100px)"
      ></div>
    </div>
    <div
      class="absolute z-10 top-0 px-2 flex justify-center w-full py-10 items-center"
    >
      <RegistrationDataName />
    </div>
  </div>
</template>

<script setup>
import RegistrationDataName from "../components/RegistrationDataName.vue";
// import RegistrationFormOnboarding from "../components/RegistrationFormOnboarding.vue";
</script>
