<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import ServiceDetails from "../components/ServiceDetails.vue";
import ConfirmDelete from "../components/ConfirmDelete.vue";
import NoCloudService from "../components/NoCloudService.vue";

const showModal = ref(false);
const showDelete = ref(false);
const headerHeight = ref(0);

const services = ref(true)

onMounted(async () => {
  await nextTick(); // wait for DOM to fully render
  const header = document.getElementById("header-bar");
  if (header) {
    headerHeight.value = header.offsetHeight + 20;
  }
});
</script>

<template>
  <ServiceDetails v-if="showModal" @close-modal="showModal = false" />
  <ConfirmDelete v-if="showDelete" @confirm-delete="showDelete = false" />

  <div class="w-full lg:h-[100vh]">
    <div
      id="header-bar"
      class="header-bar fixed w-full flex flex-row bg-white px-5 lg:px-7 py-3 lg:py-4"
    >
      <h1 class="text-sm lg:text-lg text-black font-semibold">
        Cloud Service Deployment
      </h1>
    </div>

    <div
      class="main-content w-full h-screen flex flex-row justify-center p-5 lg:p-7 box-border"
      :style="{ paddingTop: headerHeight + 'px' }"
    >
      <div
        class="content bg-white w-full h-full border border-slate-300 rounded-sm"
      >
        <div class="navbar w-full px-3 lg:px-5 py-2.5 lg:py-3">
          <div class="head w-full flex flex-row">
            <h2 class="text-md lg:text-lg text-black font-medium">
              Your Cloud Services
            </h2>
          </div>
        </div>

        <div
          class="services w-full h-[90%]">
          <div
            v-if="services === true"
            class="service-cards w-full  max-h-[calc(100vh-200px)] overflow-hidden overflow-y-auto px-3 lg:px-5 py-5 grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            <ServiceCard @open-modal="showModal = true" @confirm-delete="showDelete = true" />
          </div>
          <div
            v-else
          >
            <NoCloudService />
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
