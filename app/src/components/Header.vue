<template>
  <header class="h-14 lg:h-28 fixed w-full top-0 bg-white z-20">
    <div class="grid grid-cols-8 lg:grid-cols-10 h-full">
      <div
        class="col-span-5 lg:col-span-3 flex justify-center items-center gap-6"
      >
        <h1
          class="text-2xl p-1 mt-1 text-gray-900 hover:text-indigo-700 lg:hidden"
          @click="toggleMenu"
        >
          {{ close ? "☰" : "✘" }}
        </h1>
        <router-link to="/" class="">
          <img class="md:h-14 h-10" src="../assets/images/seasonal_logo.png" />
        </router-link>
      </div>
      <nav
        :class="{ hidden: close, 'sm:flex': open }"
        id="nav-content"
        class="container bg-white col-span-4 top-0 left-0 z-20 absolute lg:relative max-lg:flex-col lg:flex lg:justify-center lg:items-center max-lg:h-screen max-lg:w-4/5 max-w-6xl max-lg:border max-lg:shadow-2xl"
      >
        <div class="flex flex-row-reverse justify-between lg:hidden">
          <h1
            class="text-3xl px-5 text-gray-800 hover:text-indigo-700"
            @click="toggleMenu"
          >
            <!-- Display hamburger icon when menu is closed, and 'x' when menu is open -->
            {{ close ? "☰" : "✘" }}
          </h1>
        </div>
        <router-link
          :to="{ name: 'home' }"
          active-class="active-link"
          class="text-lg text-gray-700 font-medium hover:text-cyan-600"
          @click="toggleMenu"
          ><div
            class="inline-flex items-baseline justify-center max-lg:w-full lg:p-5 pt-5 rounded-md"
          >
            <span class="text-lg font-medium text-gray-700">Home</span>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          active-class="active-link"
          class="text-lg text-gray-700 font-medium hover:text-cyan-600"
          @click="toggleMenu"
          ><div
            class="inline-flex justify-center max-lg:w-full lg:p-5 pt-5 rounded-md"
          >
            <span class="text-lg font-medium text-gray-700">About</span>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          active-class="active-link"
          class="text-lg text-gray-700 font-medium hover:text-cyan-600"
          @click="toggleMenu"
          ><div
            class="inline-flex justify-center max-lg:w-full lg:p-5 pt-5 rounded-md"
          >
            <span class="text-lg font-medium text-gray-700">Contact Us</span>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          active-class="active-link"
          class="text-lg text-gray-700 font-medium hover:text-cyan-600"
          @click="toggleMenu"
          ><div
            class="inline-flex justify-center max-lg:w-full lg:p-5 pt-5 rounded-md"
          >
            <span class="text-lg font-medium text-green-700">Register</span>
          </div>
        </router-link>
      </nav>
      <div class="col-span-3 lg:col-span-3 flex justify-center items-center">
        <img class="md:h-20 h-12" src="../assets/images/youth_logo.png" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const close = ref(true);
const open = ref(false);

const toggleMenu = () => {
  close.value = !close.value;
  open.value = !open.value;
};
</script>
