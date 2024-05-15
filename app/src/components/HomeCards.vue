<template>
  <section class="py-10 lg:py-20 max-w-6xl mx-auto px-4 sm:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="flex flex-col bg-white">
        <img
          class="w-full h-52 rounded-2xl"
          src="../assets/images/life-in-the-uk.avif"
          alt="Image Description"
        />
        <div class="pt-3">
          <h3 class="text-2xl font-semibold text-gray-800">Life in the UK</h3>
          <p class="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-xl underline underline-offset-1 hover:cursor-pointer"
            >Read more
          </router-link>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="flex flex-col bg-white">
        <img
          class="w-full h-52 rounded-2xl"
          src="../assets/images/farm-life.avif"
          alt="Image Description"
        />
        <div class="pt-3">
          <h3 class="text-2xl font-semibold text-gray-800">Farm Life</h3>
          <p class="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-xl underline underline-offset-1 hover:cursor-pointer"
            >Read more
          </router-link>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="flex flex-col bg-white">
        <img
          class="w-full h-52 rounded-2xl"
          src="../assets/images/visit-travel.avif"
          alt="Image Description"
        />
        <div class="pt-3">
          <h3 class="text-2xl font-semibold text-gray-800">Visit and Travel</h3>
          <p class="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <router-link
            to="/find-more"
            class="text-green-700 font-bold text-xl underline underline-offset-1 hover:cursor-pointer"
            >Read more
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
