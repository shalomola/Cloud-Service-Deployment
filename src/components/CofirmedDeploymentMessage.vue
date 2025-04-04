<script setup lang="ts">

</script>

<template>

<div class="main-content w-full min-h-screen flex flex-row justify-center p-5 lg:p-7">
    <div class="content bg-white w-full h-[50vh] lg:h-[80vh] flex justify-center items-center lg:items-start p-10">
    <div class="inner flex flex-col items-center gap-1">
        <img src="../assets/icons/check.png" alt="" class="w-7 h-7">
        <h1 class="text-md lg:text-md font-semibold text-black text-nowrap">Cloud service successfully deployed</h1>
        <p class="text-xs lg:text-md text-gray-500 text-center">Click on the button below to view and manage your cloud service</p>
        <router-link to="/Services" class="bg-[#2563EB] py-2 px-3 text-white rounded-lg mt-5 text-md">
        View Cloud Service
        </router-link>
    </div>
    </div>
    
</div>

</template>

