<script setup lang="ts">
defineProps({
  formData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="section w-full p-5">
    <!-- Section header -->
    <div class="section-head">
      <div class="flex items-center">
        <img src="../assets/icons/check.png" alt="" class="w-5 h-5 mb-1" />
        <h2 class="text-md lg:text-lg font-semibold mb-1 ml-2">
          Review Configuration
        </h2>
      </div>
      <p class="text-xs font-light text-gray-500 mt-2">
        Please review your service configuration before deployment
      </p>
    </div>

    <div class="section-body w-full bg-[#F9FAFB] mt-5 rounded-lg">
      <div class="head w-full flex flex-row px-5 lg:px-7 py-3 lg:py-4">
        <h2 class="text-sm lg:text-md text-black font-semibold">
          Service Summary
        </h2>
      </div>
      <ul class="w-full">
        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Cover Image</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <div
              class="flex flex-col items-center justify-center bg-gray-300 h-28 w-28 rounded-xl"
            >
              <img
                :src="formData.serviceImage"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Service Name</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <p class="text-xs text-black">{{ formData.serviceName }}</p>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Description</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <p class="text-xs text-black">{{ formData.serviceDescription }}</p>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Region</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <p class="text-xs text-black">{{ formData.region }}</p>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Instance Type</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <p class="text-xs text-black">{{ formData.instanceType }}</p>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Resources</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <p class="text-xs text-black">
              {{ formData.cpu }} vCPUs, {{ formData.memory }} GB Memory,
              {{ formData.storage }} GB Storage
            </p>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Network</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <ul class="text-xs text-black flex flex-col gap-2">
              <li>VPC: {{ formData.vpc }}</li>
              <li>Subnet: {{ formData.subnet }}</li>
              <li>Public IP: {{ formData.publicIp }}</li>
            </ul>
          </div>
        </li>

        <li
          class="w-full flex flex-col gap-4 lg:flex-row px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300"
        >
          <div class="name w-full lg:w-2/5">
            <p class="text-xs text-gray-500">Security Groups</p>
          </div>

          <div class="values w-full lg:w-3/5">
            <div class="w-full p-3 border border-gray-300 rounded-lg">
              <p class="text-xs text-black">
                {{ formData.securityGroups.join(", ") || "No security groups" }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="section-head mt-5 bg-[#EFF6FF] rounded-lg p-5">
      <h2 class="text-sm lg:text-md font-semibold mb-1 text-[#1E40AF]">
        Ready to deploy
      </h2>
      <p class="text-xs font-light text-[#1E40AF] mt-2">
        Your service is ready for deployment. Click the deploy button below to
        start the deployment process
      </p>
    </div>
  </div>
</template>
