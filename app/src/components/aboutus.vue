<template>
  <section class="mx-auto max-w-5xl py-10">
    <div class="grid grid-cols-1 justify-content-center place-content-center">
      <div class="text-center py-10 space-y-8">
        <h1 class="text-5xl text-gray-900 font-bold">About Us</h1>
        <p class="text-xl leading-8 tracking-tight px-10 text-gray-600">
          "Seasonal jobs" typically refer to temporary employment opportunities
          that arise during specific times of the year, often due to seasonal
          demand or fluctuations in certain industries. Examples include jobs in
          agriculture during harvest seasons, retail positions during holiday
          shopping periods, and tourism-related roles during peak travel
          seasons.
        </p>
      </div>
      <div
        class="grid grid-cols-1 justify-content-center place-content-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-10 px-10 py-5"
      >
        <div
          class="border-[1px] border-gray-300 p-5 rounded-2xl hover:shadow-xl hover:bg-slate-50 bg-white hover:scale-1.2"
        >
          <div class="place-self-center">
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
              <p class="text-xl font-bold text-black">"Seasonal</p>
              <p class="text-xl font-bold text-black">Jobs"</p>
            </router-link>
          </div>
          <p class="text-center text-gray-600">
            The program is to promote youth participation in Agriculture through
            metorship and skills transfer.
          </p>
        </div>
        <div
          class="border-[1px] border-gray-300 p-5 rounded-2xl hover:shadow-xl hover:bg-slate-50 bg-white"
        >
          <div class="place-self-center">
            <img
              src="../assets/icons/house-check-fill.svg"
              class="h-12 w-12"
              alt="House icon"
            />
          </div>

          <div
            class="flex justify-center items-center space-x-2 font-serif py-5"
          >
            <p class="text-xl text-black font-bold">"Bring</p>
            <p class="text-xl text-black font-bold">it</p>
            <p class="text-xl text-black font-bold">Home!"</p>
          </div>
          <p class="text-center text-gray-600">
            The “Bring it Home!” concept is one that ensures, investments
            brought are back home
            <strong class="text-red-500">"Kenya"</strong> .
          </p>
        </div>

        <div
          class="border-[1px] border-gray-300 p-5 rounded-2xl hover:shadow-xl hover:bg-slate-50 bg-white"
        >
          <div class="place-self-center">
            <img
              src="../assets/icons/money-svgrepo-com.svg"
              class="h-12 w-12"
              alt="House icon"
            />
          </div>
          <div
            class="flex justify-center items-center space-x-2 font-serif py-5"
          >
            <p class="text-black text-xl font-semibold">"YouthFund</p>
            <p class="text-black text-xl font-semibold">Enterprise"</p>
          </div>
          <p class="text-center text-gray-600">
            Empowering youth through enterprise for economic growth and
            development.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
