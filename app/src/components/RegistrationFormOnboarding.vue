<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
  >
    <div class="bg-white p-4 rounded-md border shadow-2xl max-w-7xl">
      <button
        @click="prevStep"
        v-if="currentStep > 1"
        class="rounded-md px-4 py-1 text-blue-800"
      >
        Back
      </button>
      <div class="flex flex-col">
        <div class="">
          <FirstName :formData="formData" v-if="currentStep === 3" />
          <p>
            <span
              v-for="error in vFirstName$.$errors"
              :key="error.$uid"
              class="text-red-500"
              >{{ error.$message }}</span
            >
          </p>
        </div>
        <div class="flex justify-center items-end sticky py-8 bottom-0">
          <button
            @click="nextStep"
            v-if="currentStep < 5"
            class="text-white bg-blue-800 px-4 py-2 rounded-md w-full"
          >
            Next
          </button>

          <button
            v-if="currentStep === 5"
            class="text-white bg-green-600 px-4 py-2 rounded-md w-full"
            @click="finishForm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed, ref, reactive } from "vue";

// // Import your components here
// import InputEmail from "./AuthenticationRegistrationEmail.vue";

const currentStep = ref(1);

// Form data
const formData = ref({
  email: "",
  firstName: "",
  secondName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "", // Added confirmPassword field
});

const nextStep = () => {
  if (currentStep.value < 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const finishForm = () => {
  // Reroute to the Shop-admin-page route with the id parameter
  router.push({ name: "home" });
};
</script>
