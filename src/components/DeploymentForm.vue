<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import ServiceBasics from "./ServiceBasics.vue";
import Resources from "./Resources.vue";
import Network from "./Network.vue";
import Review from "./Review.vue";
import { steps } from "./constants/data.vue";
import { useRouter } from "vue-router";

const currentStep = ref(0);

const router = useRouter();

const formData = ref({
  // Service Details
  serviceName: "",
  serviceDescription: "",
  region: "us-west-1",
  serviceImage: null, // For file uploads
  instanceType: "",
  cpu: "",
  memory: "",
  storage: "",

  // Network Settings
  vpc: "Development VPC",
  subnet: "Development Subnet (AZ-b)", // Default subnet
  publicIp: false, // Checkbox

  // Security Groups (Array since multiple checkboxes)
  securityGroups: [] as string[],
});

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const submitForm = () => {
  // Perform any deploy-related logic here (e.g., API call)

  console.log("clicked");
  // After deployment logic, navigate to the confirmation page
  router.push({ name: "Confirmation" });
};
</script>

<template>
  <div
    class="main-content w-full min-h-screen flex flex-row justify-center p-5 lg:p-7"
  >
    <div class="content bg-white w-full border border-slate-300 rounded-sm">
      <Navbar :currentStep="currentStep" />

      <div class="sections w-full mt-8">
        <div v-if="currentStep === 0">
          <ServiceBasics v-model:formData="formData" />
        </div>

        <div v-if="currentStep === 1">
          <Resources
            :formData="formData"
            @update:formData="(newData) => (formData = newData)"
          />
        </div>

        <div v-if="currentStep === 2">
          <Network v-model:formData="formData" />
        </div>

        <div v-if="currentStep === 3">
          <Review v-model:formData="formData" />
        </div>
      </div>
      <div class="actions w-full mt-8 px-5">
        <div
          class="btn-contaner flex flex-row justify-between items-center border-t border-t-gray-300 py-5"
        >
          <button
            @click="prevStep"
            class="py-2 px-4 border border-slate-300 text-xs rounded-sm bg-gray-300 text-gray-500"
          >
            Back
          </button>
          <div v-if="currentStep < steps.length - 1">
            <button
              @click="nextStep"
              class="py-2 px-4 border border-slate-300 text-xs rounded-sm bg-blue-600 text-white cursor-pointer"
            >
              Next
            </button>
          </div>
          <div v-else>
            <button
              @click="submitForm"
              class="py-2 px-4 border border-slate-300 text-xs rounded-sm bg-[#16A34A] text-white cursor-pointer"
            >
              Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
