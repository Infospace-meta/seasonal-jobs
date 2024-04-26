<template>
  <div>
    <p class="text-xl text-center p-4">Enter your Names</p>
    <div>
      <form action="">
        <p class="p-2 text-lg">First Name</p>
        <input
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
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//   const props = defineProps(["formData"]);
const formData = ref(props.formData);
</script>
