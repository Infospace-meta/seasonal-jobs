<template>
  <header class="h-14 lg:h-28 fixed w-full top-0 inset-0 z-20">
    <div class="w-full h-full bg-white shadow-2xl shadow-white">
      <div class="grid grid-cols-8 lg:grid-cols-10 mx-auto max-w-7xl h-full">
        <div
          class="col-span-5 lg:col-span-2 flex justify-center items-center gap-6"
        >
          <h1
            class="text-2xl p-1 mt-1 text-gray-900 hover:text-green-700 lg:hidden"
            @click="toggleMenu"
          >
            {{ close ? "☰" : "✘" }}
          </h1>
          <router-link to="/" class="">
            <img
              class="md:h-14 h-10"
              src="../assets/images/seasonal_logo.png"
            />
          </router-link>
        </div>
        <nav
          :class="{ hidden: close, 'sm:flex': open }"
          id="nav-content"
          class="container bg-white col-span-6 max-lg:top-14 left-0 z-20 absolute lg:relative max-lg:flex-col lg:flex lg:justify-center lg:items-end max-lg:h-screen max-w-6xl max-lg:border-r max-lg:shadow-2xl"
        >
          <!-- <div class="flex flex-row-reverse justify-between lg:hidden">
          <h1
            class="text-3xl px-5 text-gray-800 hover:text-indigo-700"
            @click="toggleMenu"
          >
          {{ close ? "☰" : "✘" }}
          </h1>
        </div> -->
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
            :to="{ name: 'about' }"
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
            :to="{ name: 'contact' }"
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
            :to="{ name: 'register' }"
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
        <div class="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            class="max-lg:hidden md:h-20 h-12"
            src="../assets/images/youth_logo.png"
          />
          <router-link
            :to="{ name: 'home' }"
            active-class="active-link"
            class="lg:hidden text-gray-700 font-medium hover:text-cyan-600"
            @click="toggleMenu"
            ><div
              class="inline-flex justify-center max-lg:w-full lg:p-5 pt-5 rounded-md"
            >
              <span
                class="font-medium text-white bg-green-700 py-1 px-3 rounded-2xl"
                >Register now</span
              >
            </div>
          </router-link>
        </div>
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
