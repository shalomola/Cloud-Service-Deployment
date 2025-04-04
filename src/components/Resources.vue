<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ formData: any }>()
const emit = defineEmits(['update:formData'])
</script>

<template>
  <div class="section w-full p-5">
    <!-- Section header -->
    <div class="section-head">
      <h2 class="text-lg font-semibold mb-1">Resource Configuration</h2>
      <p class="text-xs font-light text-gray-500">
        Configure the compute resources for your service
      </p>
    </div>

    <div class="head mt-5">
      <h2 class="text-md font-semibold mb-1">Instance Type</h2>
      <p class="text-xs font-light text-gray-500">
        Select the kind of instance that best fits your workload
      </p>
    </div>

    <div class="options mt-5">
      <div class="option flex flex-row items-center mt-5">
        <input
          type="radio"
          name="instanceType"
          value="standard"
          v-model="props.formData.instanceType"
          @input="emit('update:formData', { ...props.formData })"
          class="active:bg-blue-600"
        />
        <div class="info ml-3">
          <div class="type text-xs">Standard (General purpose)</div>
          <div class="details text-xs text-gray-400 mt-1">
            Balanced compute, memory and networking
          </div>
        </div>
      </div>

      <div class="option flex flex-row items-center mt-5">
        <input
          type="radio"
          name="instanceType"
          value="computeOptimized"
          v-model="props.formData.instanceType"
          @input="emit('update:formData', { ...props.formData })"
          class="active:bg-blue-600"
        />
        <div class="info ml-3">
          <div class="type text-xs">Compute Optimized</div>
          <div class="details text-xs text-gray-400 mt-1">
            High performance processors
          </div>
        </div>
      </div>

      <div class="option flex flex-row items-center mt-5">
        <input
          type="radio"
          name="instanceType"
          value="memoryOptimized"
          v-model="props.formData.instanceType"
          @input="emit('update:formData', { ...props.formData })"
          class="active:bg-blue-600"
        />
        <div class="info ml-3">
          <div class="type text-xs">Memory optimized</div>
          <div class="details text-xs text-gray-400 mt-1">
            Fast performance for memory-intensive workloads
          </div>
        </div>
      </div>

      <div class="option flex flex-row items-center mt-5">
        <input
          type="radio"
          name="instanceType"
          value="storageOptimized"
          v-model="props.formData.instanceType"
          @input="emit('update:formData', { ...props.formData })"
          class="active:bg-blue-600"
        />
        <div class="info ml-3">
          <div class="type text-xs">Storage Optimized</div>
          <div class="details text-xs text-gray-400 mt-1">
            Low Latency, high disk throughput
          </div>
        </div>
      </div>
    </div>

    <div class="power w-full flex flex-col lg:flex-row lg:gap-5 items-center justify-between">
      <div class="cpu w-full mt-8 flex flex-col items-start">
        <label for="cpu" class="text-xs text-gray-500">
          vCPU <span style="color: red; margin-left: 10px">*</span>
        </label>
        <input
          type="text"
          name="cpu"
          v-model="props.formData.cpu"
          @input="emit('update:formData', { ...props.formData })"
          placeholder=""
          class="border-b border-b-gray-300 w-full focus:outline-0 py-1 text-sm"
          required
        />
      </div>

      <div class="memory w-full mt-8 flex flex-col items-start">
        <label for="memory" class="text-xs text-gray-500">
          Memory (GB) <span style="color: red; margin-left: 10px">*</span>
        </label>
        <input
          type="text"
          name="memory"
          v-model="props.formData.memory"
          @input="emit('update:formData', { ...props.formData })"
          placeholder=""
          class="border-b border-b-gray-300 w-full focus:outline-0 py-1 text-sm"
          required
        />
      </div>

      <div class="storage w-full mt-8 flex flex-col items-start">
        <label for="storage" class="text-xs text-gray-500">
          Storage (GB) <span style="color: red; margin-left: 10px">*</span>
        </label>
        <input
          type="text"
          name="storage"
          v-model="props.formData.storage"
          @input="emit('update:formData', { ...props.formData })"
          placeholder=""
          class="border-b border-b-gray-300 w-full focus:outline-0 py-1 text-sm"
          required
        />
      </div>
    </div>
  </div>
</template>
