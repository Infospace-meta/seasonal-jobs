<template>
  <section class="mx-auto max-w-6xl py-10">
    <div
      class="mx-5 grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5 rounded-3xl px-10 py-10 bg-gray-100 text-black"
    >
      <div>
        <h1 class="px-11 py-2 font-semibold text-4xl mb-4">Remember</h1>
        <div class="flex justify-start items-start">
          <img
            src="../assets/icons/arrow-right-svgrepo-com.svg"
            class="h-12 w-12 pb-5"
            alt="arrow"
          />
          <p class="place-self-start">Increase in wages per hour in 2024</p>
        </div>
        <div class="flex justify-start items-start">
          <img
            src="../assets/icons/arrow-right-svgrepo-com.svg"
            class="h-12 w-12 pb-5"
            alt="arrow"
          />
          <p>Machinery skills added advantage</p>
        </div>
        <div class="flex justify-start items-start">
          <img
            src="../assets/icons/arrow-right-svgrepo-com.svg"
            class="h-12 w-12 pb-5"
            alt="arrow"
          />
          <p>Accommodation at government rate</p>
        </div>
        <div class="flex justify-start items-start">
          <img
            src="../assets/icons/arrow-right-svgrepo-com.svg"
            class="h-12 w-12 pb-5"
            alt="arrow"
          />
          <p>Only passport and flight ticket required</p>
        </div>
      </div>
      <div
        class="space-y-10 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl -rotate-2 p-5"
      >
        <h1 class="py-10 text-2xl font-serif -rotate-1 text-white">
          Work in the Uk and Get paid Ksh 80,000 Per Week, then Invest back
          home.
        </h1>

        <router-link to="/register" class="space-y-3">
          <button
            class="px-8 py-3 text-gray-700 bg-orange-400 rounded-full font serif"
          >
            Register Now
          </button>
          <p class="tracking-tight text-white">To Secure Your Slot</p>
        </router-link>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-[url('../assets/images/grass.jpg')] bg-cover rounded-xl">
      <ul class="p-5 px-5">
        <li>Increase in wages per hour in 2024</li>
        <li>Machinery skills added advantage</li>
        <li>Accommodation at government rate</li>
        <li>Only passport and flight ticket required</li>
      </ul>
      <div class="blur-0">
        <div class=" bg-white"></div>
        <div class=" bg-black"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
