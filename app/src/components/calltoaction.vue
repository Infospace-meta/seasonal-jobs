<template>
  <section class="py-6 lg:py-12">
    <div
      class="relative bg-gradient-to-l from-gray-600 to-green-700  h-28 w-[370px] md:h-36 md:w-[600px] lg:h-48 lg:w-[1000px] mx-auto rounded-xl"
    >
      <div class="absolute top-1 left-4 sm:top-2 sm:left-8 lg:top-5 lg:left-16">
        <h1 class="text-sm sm:text-md lg:text-xl font-medium text-white tracking-tight sm:tracking-normal">
          Want to Work in the UK
        </h1>
      </div>
      <div
        class="absolute left-4 top-5 sm:left-8 sm:top-10 lg:left-16 lg:top-16 flex justify-center items-center lg:pb-5 pt-2 sm:pt-0"
      >
        <router-link to="/register">
          <button
            class="bg-orange-400 px-1 py-1  sm:px-3 sm:py-3 rounded-full text-gray-700 text-sm "
          >
            Register now
          </button></router-link
        >
      </div>
      <div class="absolute left-4 bottom-1 sm:left-8 sm:bottom-2 lg:left-16 lg:bottom-7">
        <span class="text-white tracking-tight sm:tracking-normal"
          >Get paid <strong>Ksh 80,000 Per Week</strong>,<br />
          then <strong>Invest</strong> back home.</span
        >
      </div>
      <div
        class="absolute right-0 -top-4 sm:-top-2 lg:-top-3 flex justify-end items-center space-x-2 font-serif lg:px-10 lg:pt-10 sm:px-5 sm:pt-5 px-5 pt-5"
      >
        <p class="text-md md:text-2xl lg:text-4xl text-white font-bold">
          "Bring
        </p>
        <p class="text-md md:text-2xl lg:text-4xl font-bold text-white">it</p>
        <p class="text-md md:text-2xl lg:text-4xl text-white font-bold">
          Home!"
        </p>
      </div>
      <div class="hidden sm:flex sm:absolute sm:right-20 sm:bottom-1 lg:bottom-5 lg:right-[150px]  ">
        <img src="../assets/images/kenya.png" class="h-24 w-24" alt="kenya">
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
