<template>
  <header class="h-14 lg:h-28 fixed w-full top-0 bg-white z-20">
    <div class="grid grid-cols-8 h-full">
      <div
        class="col-span-5 lg:col-span-2 flex justify-center items-center gap-6"
      >
        <h1
          class="text-2xl p-1 mt-1 text-gray-900 hover:text-indigo-700 lg:hidden"
          @click="toggleMenu"
        >
          {{ close ? "☰" : "✘" }}
        </h1>
        <router-link to="/" class="">
          <img class="md:h-12 h-10" src="../assets/images/seasonal_logo.png" />
        </router-link>
      </div>
      <nav
        :class="{ hidden: close, 'sm:flex': open }"
        id="nav-content"
        class="container col-span-4 top-0 left-0 z-20 absolute lg:relative max-lg:flex-col lg:flex lg:justify-center lg:items-center max-lg:h-screen max-lg:w-4/5 max-w-6xl border shadow-2xl bg-white"
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
      </nav>
      <div class="col-span-3 lg:col-span-2 flex justify-center items-center gap-2">
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
