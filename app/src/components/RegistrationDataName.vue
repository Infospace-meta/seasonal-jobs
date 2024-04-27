<template>
  <div
    class="container p-4 mx-auto max-w-5xl rounded-2xl shadow-2xl lg:px-10 bg-white"
    style="background-image: none"
  >
    <p class="text-3xl py-10 font-bold text-center text-gray-900">
      Register Now
    </p>
    <div class="">
      <form action="">
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">First Name</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Last Name</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">E-mail</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">Confirm Email</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Phone Number(Mpesa Active)</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Nationality</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">Nationality</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">ID Number</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>

        <!-- <input
          v-model="formData.firstName"
          type="text"
          name="FirstName"
          id="FirstName"
          class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
        />
        <p class="p-2 text-lg">Family Name</p>
        <input
          v-model="formData.familyName"
          type="text"
          name="FamilyName"
          id="FamilyName"
          class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
        />
        <p class="p-2 text-lg">Second Name</p>
        <input
          v-model="formData.SecondName"
          type="text"
          name="SecondName"
          id="SecondName"
          class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
        /> -->
      </form>
    </div>
    <div class="flex justify-end py-5">
      <button
        class="text-white bg-green-600 px-4 py-2 rounded-md"
        @click="finishForm"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//   const props = defineProps(["formData"]);
// const formData = ref(props.formData);
</script>
