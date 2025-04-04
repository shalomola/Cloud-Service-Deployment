<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const emit = defineEmits(['close-modal']);

const headerHeight = ref(0)

onMounted(async () => {
  await nextTick() // wait for DOM to fully render
  const header = document.getElementById('modal-header-bar')
  if (header) {
    headerHeight.value = header.offsetHeight
  }
})

</script>

<template>

<div class="absolute w-full h-screen bg-[#0005] z-50 overflow-hidden transition-all ease-in-out duration-500">

  <div 
    class=" section absolute top-0 left-0 lg:top-0 lg:right-0 lg:ml-auto w-full h-full lg:w-100 bg-white px-5 transition-all ease-in-out duration-1000"
    >

    <div 
      class=" section w-full h-full rounded-lg"
      >

      <div id="modal-header-bar" class="head w-full absolute top-0 right-0 bg-white p-5">
        <div class="w-full flex flex-row items-center">
          <h2 class="text-sm lg:text-md text-black font-semibold">Service Summary</h2>
          <div class="actions hidden lg:flex flex-row items-center gap-5 ml-auto">
            <router-link to="" class="">
                <img src="../assets/icons/edit.png" alt="" class="w-4 h-4">
            </router-link>
            <router-link to="" class="">
                <img src="../assets/icons/bin2.png" alt="" class="w-4 h-4">
            </router-link>
          </div>
          <button @click="emit('close-modal')" class="cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out ml-auto lg:ml-5">
              <img src="../assets/icons/cancel.png" alt="" class="w-7 h-7">
          </button>
        </div>
        <div class="actions w-full lg:hidden flex flex-row items-center justify-end gap-5 mt-5 pr-1">
            <router-link to="" class="">
                <img src="../assets/icons/edit.png" alt="" class="w-5 h-5">
            </router-link>
            <router-link to="" class="">
                <img src="../assets/icons/bin2.png" alt="" class="w-5 h-5">
            </router-link>
          </div>
      </div>
      
      
      <div 
      class="section-body w-full h-[98%] box-border"
      :style="{ paddingTop: headerHeight + 'px' }"
      >
        <div class="section-body w-full h-full bg-[#F9FAFB] overflow-hidden overflow-y-scroll rounded-lg">
          
          <ul class="w-full">
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 ">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Cover Image</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                <div class="flex flex-col items-center justify-center bg-gray-300 h-28 w-28 rounded-xl">
                </div>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Service Name</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                <p class="text-xs text-black">Service Name</p>
              </div>
            </li>
  
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Description</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                <p class="text-xs text-black">Service description</p>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Region</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                
                <p class="text-xs text-black">US East (N California)</p>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Instance Type</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                
                <p class="text-xs text-black">Standard (General purpose)</p>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Resources</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                <p class="text-xs text-black">2 vCPUs, 4 GB Memory, 100 GB Storage</p>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Network</p>
              </div>
  
              <div class="values w-full lg:w-3/5">
                <ul class="text-xs text-black flex flex-col gap-2">
                  <li>VPC: Development VPC</li>
                  <li>Subnet: Development Subnet (AZ-b)</li>
                  <li>Public IP: Yes</li>
                </ul>
              </div>
            </li>
            
            <li class="w-full flex flex-col gap-4  px-5 lg:px-7 py-3 lg:py-4 border-t border-t-gray-300">
              <div class="name w-full lg:w-2/5">
                <p class="text-xs text-gray-500">Security Groups</p>
              </div>
  
            <div class="values w-full lg:w-3/5">
            <div class="w-full p-3 border border-gray-300 rounded-lg">
                <p class="text-xs text-black">SSH Access</p>
            </div>
            </div>
  
            </li>
  
          </ul>
        </div>
      </div>

    </div>

  </div>

</div>

</template>