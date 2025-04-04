<template>
    <div class="navbar w-full px-3 lg:px-5 py-2.5 lg:py-3">
        <div class="head w-full flex flex-row">
        <h2 class="text-md lg:text-lg text-black font-normal">Configure New Cloud Service</h2>
        </div>
        <div class="nav w-full h-[60vh] lg:h-auto mt-8">
        <ul class="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            <li 
            v-for="(step, index) in steps" :key="index"
            class="step-card relative w-full h-1/4 lg:w-1/4 lg:h-auto flex flex-row items-center justify-start lg:flex-col">
            <div 
                class="progress-bar relative w-1 h-full lg:w-full lg:h-1 mr-4 lg:mb-5"
                :class="{ 'bg-blue-600': isActive(index), 'bg-gray-300': !isActive(index) }">
            </div>
            <div class="w-full">
                <div class="step w-full text-left mt-1">
                <p class="text-xs lg:text-sm text-blue-600">Step {{ index + 1 }}</p>
                </div>
                <div class="title w-full text-left mt-1">
                <p class="text-xs lg:text-sm text-black font-semibold">{{ step.title }}</p>
                </div>
                <div class="description w-full text-left mt-1">
                <p class="text-xs lg:text-sm text-gray-500">{{ step.content }}</p>
                </div>
            </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define props for currentStep state
const props = defineProps<{ currentStep: number }>()

// Define steps for the cloud service configuration process
const steps = [
  {
    title: 'Service Basics',
    content: 'Define your service details.'
  },
  {
    title: 'Resources',
    content: 'Configure compute resources.'
  },
  {
    title: 'Network',
    content: 'Choose resources for your service.'
  },
  {
    title: 'Review',
    content: 'Review and deploy.'
  }
]

// Function to check if a step is active based on the currentStep
const isActive = (index: number) => {
  return index <= props.currentStep
}
    
</script>