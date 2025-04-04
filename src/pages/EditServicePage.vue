<script setup lang="ts">
import EditForm from "../components/EditForm.vue";
</script>

<template>
  <div class="registration-form w-full lg:h-screen">
    <div
      class="header-bar w-full flex flex-row bg-white px-5 lg:px-7 py-3 lg:py-4"
    >
      <h1 class="text-sm lg:text-lg text-black font-semibold">
        Cloud Service Deployment
      </h1>
    </div>

    <EditForm />
  </div>
</template>
