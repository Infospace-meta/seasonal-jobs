<template>
  <section class="py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/life-in-the-uk.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-4">
            <h1 class="text-3xl font-semibold text-white">Life in the UK</h1>
            <p class="text-white py-3">
              Upon arrival You are collected by the Sponsor from the arrival
              airport to commence work immediately. Each approved applicant...
            </p>
            <router-link
              to="/find-more"
              class="text-black font-semibold hover:cursor-pointer px-6 py-2 bg-white rounded-3xl"
              >Living in UK
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/farm-life-2.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-4">
            <h1 class="text-3xl font-semibold text-white">Farm Life</h1>
            <p class="text-white py-3">
              Participants will undergo a brief but detailed training program
              tailored to their specific agricultural roles. The Employer...
            </p>
            <router-link
              to="/find-more"
              class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl"
              >Farming abroad
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="w-full h-[400px] relative bg-[url('../assets/images/visit-travel.avif')] bg-no-repeat bg-cover rounded-2xl"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-25 rounded-2xl">
          <div class="absolute inset-x-0 bottom-0 p-4">
            <h1 class="text-3xl font-semibold text-white">
              Travelling to the UK
            </h1>
            <p class="text-white py-3">
              It is the responsibility of the applicant to pay for the Biometric
              data collection & the Seasonal Job Visa which will be approved
              with...
            </p>
            <router-link
              to="/find-more"
              class="text-black font-semibold text-lg hover:cursor-pointer px-6 py-2 bg-white rounded-3xl"
              >Travel abroad
            </router-link>
          </div>
        </div>
      </div>

      <!-- Card 1 -->
      <!-- <div class="flex flex-col bg-white">
        <img
          class="w-full h-auto rounded-2xl"
          src="../assets/images/life-in-the-uk.avif"
          alt="Image Description"
          loading="lazy"
        />
        <div class="pt-3">
          <h1 class="text-2xl font-semibold text-gray-800">Life in the UK</h1>
          <p class="py-2 text-gray-600">
            Upon arrival You are collected by the Sponsor from the arrival
            airport to commence work immediately. Each approved applicant ...
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-lg underline underline-offset-1 hover:cursor-pointer"
            >Living in UK
          </router-link>
        </div>
      </div> -->
      <!-- Card 2 -->
      <!-- <div class="flex flex-col bg-white">
        <img
          class="w-full h-auto rounded-2xl"
          src="../assets/images/farm-life-2.avif"
          alt="Image Description"
          loading="lazy"
        />
        <div class="pt-3">
          <h1 class="text-2xl font-semibold text-gray-800">Farm Life</h1>
          <p class="py-2 text-gray-600">
            Participants will undergo a brief but detailed training program
          tailored to their specific agricultural roles. The Employer ...
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-lg underline underline-offset-1 hover:cursor-pointer"
            >Farming abroad
          </router-link>
        </div>
      </div> -->
      <!-- Card 3 -->
      <!-- <div class="flex flex-col bg-white">
        <img
          class="w-full h-auto rounded-2xl"
          src="../assets/images/visit-travel.avif"
          alt="Image Description"
          loading="lazy"
        />
        <div class="pt-3 h-full">
          <h1 class="text-2xl font-semibold text-gray-800">Travelling to the UK</h1>
          <p class="py-2 text-gray-600">
            It is the responsibility of the applicant to pay for the Biometric
          data collection & the Seasonal Job Visa which will be approved with ...
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-lg underline underline-offset-1 hover:cursor-pointer"
            >Travel abroad
          </router-link>
        </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
