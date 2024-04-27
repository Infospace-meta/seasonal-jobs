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
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">National ID No</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Passport No(if Applicable)</p>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Passport Expiry Date (if applicable)</p>
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
            <p class="py-2 text-lg">Gender</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  class="border border-gray-400 rounded-md"
                />
                <label for="male">Male</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  class="border border-gray-400 rounded-md"
                />
                <label for="female">Female</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Age</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="18 - 38"
                  name="age"
                  value="18 - 38"
                  class="border border-gray-400 rounded-md"
                />
                <label for="male">18 - 38</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="38 - 45"
                  name="age"
                  value="38 - 45"
                  class="border border-gray-400 rounded-md"
                />
                <label for="38 - 45">38 - 45</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Pre-existing Medical Conditions</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="Yes"
                  name="Medical Conditions"
                  value="Yes"
                  class="border border-gray-400 rounded-md"
                />
                <label for="Yes">Yes</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="No"
                  name="Medical Conditions"
                  value="No"
                  class="border border-gray-400 rounded-md"
                />
                <label for="No">No</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">Agricultural Experience</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="Yes"
                  name="Experience"
                  value="Yes"
                  class="border border-gray-400 rounded-md"
                />
                <label for="Yes">Yes</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="No"
                  name="Experience"
                  value="No"
                  class="border border-gray-400 rounded-md"
                />
                <label for="No">No</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Youth Fund Loan</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="Yes"
                  name="Loan"
                  value="Yes"
                  class="border border-gray-400 rounded-md"
                />
                <label for="Yes">Yes</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="No"
                  name="Loan"
                  value="No"
                  class="border border-gray-400 rounded-md"
                />
                <label for="No">No</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
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
        class="text-white bg-green-700 px-4 py-2 rounded-md"
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
