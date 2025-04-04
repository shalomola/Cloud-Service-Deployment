<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps<{ formData: any }>()
const emit = defineEmits(['update:formData'])

const selectedImage = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const imageInput = ref<HTMLInputElement | null>(null)

const triggerUpload = () => {
  imageInput.value?.click()
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    selectedImage.value = file
    imagePreview.value = URL.createObjectURL(file)
    emit('update:formData', { ...props.formData, serviceImage: imagePreview.value })
  }
}

const cancelUpload = () => {
  selectedImage.value = null
  imagePreview.value = null
  if (imageInput.value) {
    imageInput.value.value = ''
  }
  emit('update:formData', { ...props.formData, serviceImage: null })
}
</script>

<template>
  <div class="section w-full lg:w-3/5 p-5">
    <div class="section-head">
      <h2 class="text-lg font-semibold mb-1">Service Basics</h2>
      <p class="text-xs font-light text-gray-500">Provide basic information about your cloud service</p>
    </div>

    <div class="image-upload mt-5 w-full flex flex-row gap-3 items-center">
      <div v-if="imagePreview" class="mt-4">
        <img :src="imagePreview" alt="Preview" class="w-28 h-28 object-cover rounded-lg" />
      </div>

      <div v-else class="flex flex-col items-center justify-center bg-gray-300 h-28 w-28 rounded-xl">
        <img src="../assets/icons/pic.png" alt="" class="w-7 h-7">
        <p class="text-xs text-nowrap font-semibold text-gray-500 mt-1">Cover image</p>
      </div>

      <input 
        type="file" 
        accept="image/*" 
        @change="handleImageUpload"
        ref="imageInput"
        class="hidden"
      />

      <button @click="triggerUpload" class="upload-btn h-10 w-10 bg-white border border-gray-300 flex items-center justify-center rounded-md">
        <img src="../assets/icons/upload.png" alt="" class="w-7 h-7">
      </button>

      <button @click="cancelUpload" class="upload-btn h-10 w-10 bg-white border border-gray-300 flex items-center justify-center rounded-md">
        <img src="../assets/icons/bin.png" alt="" class="w-7 h-7">
      </button>
    </div>

    <div class="service-name w-full mt-8 flex flex-col items-start">
      <label for="service_name" class="text-xs text-gray-500">Service Name <span style="color: red;">*</span></label>
      <input type="text" v-model="props.formData.serviceName" @input="emit('update:formData', { ...props.formData })" class="border-b border-b-gray-300 rounded-sm w-full focus:outline-0 py-1 text-sm" required />
    </div>

    <div class="service-name w-full mt-8 flex flex-col items-start">
      <label for="description" class="text-xs text-gray-500">Description</label>
      <textarea v-model="props.formData.serviceDescription" @input="emit('update:formData', { ...props.formData })" rows="3" class="border-b border-b-gray-300 rounded-sm w-full focus:outline-0 py-1 text-sm"></textarea>
    </div>

    <div class="description w-full mt-8 flex flex-col items-start">
      <label for="region" class="text-xs text-gray-500">Region</label>
      <select v-model="props.formData.region" @change="emit('update:formData', { ...props.formData })" class="border-b border-b-gray-300 rounded-sm w-full focus:outline-0 py-1 text-sm">
        <option value="us-west-1">US West (N. California)</option>
      </select>
    </div>
  </div>
</template>
