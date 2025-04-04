<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const emit = defineEmits(["confirm-delete"]);

const headerHeight = ref(0);

onMounted(async () => {
  await nextTick(); // wait for DOM to fully render
  const header = document.getElementById("modal-header-bar");
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
});
</script>

<template>
  <div
    class="absolute w-full h-screen bg-[#0005] z-50 overflow-hidden transition-all ease-in-out duration-500 flex justify-center items-center p-2"
  >
    <div
      class="modal w-full lg:max-w-[50vw] bg-white px-5 transition-all ease-in-out duration-1000 p-16 flex flex-col items-center gap-4"
    >
      <img src="../assets/icons/bin2.png" alt="" class="w-7 h-7">
      <h2 class="text-md lg:text-md font-semibold text-black text-nowrap">Delete this cloud service</h2>
      <p class="text-xs lg:text-md text-gray-500 text-center">Are you sure you want to delete this cloud service?</p>
      <div class="action flex flex-row items-center justify-center gap-8">
        <button @click="emit('confirm-delete')" class="bg-[#F3F4F6] border border-[#D1D5DB] py-2 px-4 text-[#D1D5DB] rounded-lg text-md cursor-pointer">No, close</button>
        <button @click="" class="bg-[#EF4444] py-2 px-4 text-white rounded-lg text-md cursor-pointer">Yes, delete</button>
      </div>
    </div>
  </div>
</template>
