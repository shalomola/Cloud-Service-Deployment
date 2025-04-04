<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Define the interface for the form data
interface NetworkSettingsForm {
    vpc: string;
  subnet: string;
  publicIp: boolean;
  securityGroups: string[];
}

// Define the props and emits for the component
const props = defineProps<{ formData: NetworkSettingsForm }>();
const emit = defineEmits(['update:formData']);

// Function to update the form data
const updateForm = (newData: Partial<NetworkSettingsForm>) => {
    emit('update:formData', { ...props.formData, ...newData });
};

</script>


<template>
    <div class="section w-full p-5">
      <!-- Section header -->
      <div class="section-head">
        <h2 class="text-lg font-semibold mb-1">Network Settings</h2>
        <p class="text-xs font-light text-gray-500">Configure the settings for your cloud service</p>
      </div>
  
      <div class="form w-full flex flex-col lg:flex-row lg:gap-5 items-center justify-between">
  <!-- VPC Selection -->
  <div class="input w-full mt-8 flex flex-col items-start">
    <label for="vpc" class="text-xs text-gray-500">Virtual Private Cloud (VPC) <span class="text-red-500">*</span></label>
    <select v-model="props.formData.vpc" @change="updateForm({ vpc: ($event.target as HTMLSelectElement).value })" class="border-b border-b-gray-300 w-full focus:outline-0 py-1 text-sm">
      <option value="us-east-1">Development VPC</option>
    </select>
  </div>

  <!-- Subnet Selection -->
  <div class="input w-full mt-8 flex flex-col items-start">
    <label for="subnet" class="text-xs text-gray-500">Subnet <span class="text-red-500">*</span></label>
    <select v-model="props.formData.subnet" @change="updateForm({ subnet: ($event.target as HTMLSelectElement).value })" class="border-b border-b-gray-300 w-full focus:outline-0 py-1 text-sm">
      <option value="dev-subnet">Development Subnet (AZ-b)</option>
    </select>
  </div>
</div>

<!-- Public IP Checkbox -->
<div class="w-full">
  <div class="check flex flex-row items-center mt-5 mb-2">
    <input type="checkbox" id="public_ip" v-model="props.formData.publicIp" @change="updateForm({ publicIp: ($event.target as HTMLInputElement).checked })" class="mr-2 checked:bg-blue-600">
    <label for="public_ip" class="text-xs text-black">Assign Public IP Address</label>
  </div>
  <p class="text-xs font-light text-gray-500">Enable this to make your service accessible from the internet</p>
</div>

  
      <!-- Security Groups -->
      <div class="security-groups mt-5">
        <div class="head">
          <h2 class="text-sm">Security Groups</h2>
          <p class="text-xs font-light text-gray-500">Configure security rules for your service</p>
        </div>
  
        <div class="options mt-2">
          <div class="check flex flex-row items-center mb-2" v-for="group in ['web_traffic', 'ssh_access', 'database', 'internal']" :key="group">
            <input type="checkbox" :id="group" :value="group" v-model="props.formData.securityGroups" @change="updateForm({ securityGroups: [...props.formData.securityGroups] })" class="mr-2 checked:bg-blue-600">
            <label :for="group" class="text-xs text-black">{{ group }}</label>
          </div>
        </div>
      </div>
    </div>
  </template>
  