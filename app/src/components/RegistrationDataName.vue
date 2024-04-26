<template>
  <div class="p-4 mx-auto max-w-5xl">
    <p class="text-2xl py-10 font-semibold text-gray-900">
      Fill in the Registration Form
    </p>
    <div>
      <form action="">
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="p-2 text-lg">First Name</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="p-2 text-lg">Last Name</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="p-2 text-lg">E-mail</p>
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
            <p class="p-2 text-lg">Confirm Email</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="p-2 text-lg">Phone Number(Mpesa Active)</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="p-2 text-lg">Nationality</p>
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
            <p class="p-2 text-lg">Nationality</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="p-2 text-lg">ID Number</p>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

//   const props = defineProps(["formData"]);
// const formData = ref(props.formData);
</script>
