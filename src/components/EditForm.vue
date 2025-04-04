<script setup lang="ts">
import { ref } from "vue";
import ServiceBasics from "./ServiceBasics.vue";
import Resources from "./Resources.vue";
import Network from "./Network.vue";
import { steps } from "./constants/data.vue";
import { useRouter } from "vue-router";


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
</script>

<template>
  <div
    class="main-content w-full min-h-screen flex flex-row justify-center p-5 lg:p-7"
  >
    <div class="content bg-white w-full border border-slate-300 rounded-sm">

      <div class="sections w-full mt-8">
        <ServiceBasics v-model:formData="formData" />
        <Resources
          :formData="formData"
          @update:formData="(newData) => (formData = newData)"
        />
        <Network v-model:formData="formData" />
      </div>
      <div class="actions w-full mt-8 px-5">
        <div
          class="btn-contaner flex flex-row justify-end items-center gap-5 border-t border-t-gray-300 py-5"
        >
          <RouterLink
            to="/services"
            @click=""
            class="py-2 px-4 border border-slate-300 text-xs rounded-sm bg-gray-300 text-gray-500"
            >Cancel</RouterLink
          >
          <div>
            <button
              @click=""
              class="py-2 px-4 border border-slate-300 text-xs rounded-sm bg-blue-600 text-white cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
