<script setup lang="ts">

const emit = defineEmits(['open-modal', 'confirm-delete'])

</script>

<template>

<div class="card w-full border border-gray-300 rounded-2xl">
    <div class="card-body p-4">
        <div class="flex flex-col items-center justify-center bg-gray-300 h-28 w-28 rounded-xl">
            <!-- <img src="" alt="" class="w-full h-full object-cover rounded-xl"> -->
        </div>
        <h5 class="card-title text-md mt-5">Cloud Service Name</h5>
        <p class="card-text text-xs text-gray-500 mt-2">Service Description text goes here</p>
    </div>

    <div class="card-footer border-t border-t-gray-300 p-4 flex flex-row items-center justify-between">
        <div class="actions flex flex-row items-center gap-5">
            <RouterLink to="/edit-service" @click="" class="">
                <img src="../assets/icons/edit.png" alt="" class="w-7 h-7">
            </RouterLink>
            <button @click="emit('confirm-delete')" class="">
                <img src="../assets/icons/bin2.png" alt="" class="w-7 h-7">
            </button>
        </div>
        <button @click="emit('open-modal')" class="bg-[#2563EB] py-2 px-4 text-white rounded-lg text-md cursor-pointer">View details</button>
    </div>
</div>

</template>