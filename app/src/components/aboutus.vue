<template>
  <section class="mx-auto max-w-6xl py-16">
    <div
      class="relative grid grid-cols-1 justify-content-center place-content-center bg-[url('../assets/images/medium.jpg')] bg-cover rounded-xl h-[36rem] mx-3"
    >
      <!-- <div class="text-center py-10 space-y-8 text-white">
        <h1 class="text-5xl  font-bold">About Us</h1>
        <p class="text-xl leading-8 tracking-tight px-10 text-white">
          "Seasonal jobs" typically refer to temporary employment opportunities
          that arise during specific times of the year, often due to seasonal
          demand or fluctuations in certain industries. Examples include jobs in
          agriculture during harvest seasons, retail positions during holiday
          shopping periods, and tourism-related roles during peak travel
          seasons.
        </p>
      </div> -->

      <!-- <div
        class="grid grid-cols-1 justify-content-center place-content-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-10 px-10 py-5"
      > -->
      <!-- <div
          class="border-[1px] border-gray-300 p-5 rounded-2xl hover:shadow-xl  bg-slate-800 text-white  bg-opacity-70"
        >
          <div class="ml-10 my-5 p-4 ">
            <img
              src="../assets/icons/airplane.svg"
              class="h-12 w-12 rotate-45"
              alt="House icon"
            />
          </div>
          <div>
            <router-link
              to="/about"
              class="flex justify-center items-center space-x-3 py-5 font-serif"
            >
              <p class="text-xl font-bold ">"Seasonal</p>
              <p class="text-xl font-bold ">Jobs"</p>
            </router-link>
          </div>
          <p class="text-center">
            The program is to promote youth participation in Agriculture through
            metorship and skills transfer.
          </p>
        </div> -->
      <div class="absolute w-72 left-8 sm:left-36 bottom-16">
        <div class="rounded-2xl bg-white p-10">
          <h1 class="text-4xl font-bold text-center py-2">About Us</h1>

          <div class="py-4">
            <img
              src="../assets/icons/house-check-fill.svg"
              class="h-12 w-12"
              alt="House icon"
            />
          </div>

          <div
            class="flex justify-center items-center space-x-2 font-serif py-1 text-xl"
          >
            <p class="font-bold">"Seasonal</p>
            <!-- <p class="font-bold">it</p> -->
            <p class="font-bold">Jobs!"</p>
          </div>
          <p class="text-center">
            and Youthfund have signed a Partnership Agreement aimed at promoting
            youth participation in agriculture through the mentorship and skills
            transfer program known as 'Bring it Home!'
          </p>
        </div>
      </div>

      <div class="absolute left-32 bottom-6 sm:left-80 sm:bottom-8 bg-white rounded-xl p-1">
        <router-link to="/about"
          ><button class="px-3 bg-gradient-to-tr from-green-600 to-teal-600 p-3 text-xl text-white rounded-xl">
            Know More
          </button></router-link
        >
      </div>

      <!-- <div
          class="border-[1px] border-gray-300 p-5 rounded-2xl hover:shadow-xl  bg-slate-800 text-white  bg-opacity-70"
        >
          <div class="ml-10 my-5 p-4 ">
            <img
              src="../assets/icons/money-svgrepo-com.svg"
              class="h-12 w-12"
              alt="House icon"
            />
          </div>
          <div
            class="flex justify-center items-center space-x-2 font-serif py-5"
          >
            <p class=" text-xl font-semibold">"YouthFund</p>
            <p class=" text-xl font-semibold">Enterprise"</p>
          </div>
          <p class="text-center ">
            Empowering youth through enterprise for economic growth and
            development.
          </p>
        </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
