<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Template Selection -->
      <div class="lg:col-span-3 flex gap-4 overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
        <button
            v-for="template in templates"
            :key="template.id"
            @click="selectTemplate(template)"
            class="min-w-[200px] h-24 border-2 rounded-lg p-2 flex items-center justify-center"
            :class="selectedTemplate.id === template.id ? 'border-primary-600' : 'border-gray-200'"
        >
          <component :is="template.preview" class="w-full h-full"/>
        </button>
      </div>

      <!-- Properties Panel -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-4">Template Properties</h2>
        <div class="space-y-4">
          <!-- Tag Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Tag</label>
            <input
                v-model="properties.tag"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <!-- Title Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input
                v-model="properties.title"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <!-- Logo Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Logo</label>
            <div class="mt-4 flex items-center">
              <input
                  type="file"
                  @change="handleLogoUpload"
                  accept="image/*"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
            </div>
          </div>

          <!-- Background Options -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Background</label>
            <div class="grid grid-cols-4 gap-2">
              <button
                  v-for="color in gradientColors"
                  :key="color.start"
                  @click="selectGradient(color)"
                  class="w-12 h-12 rounded-lg"
                  :style="{
                  background: `linear-gradient(to right, ${color.start}, ${color.end})`
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Preview Area -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow-sm p-6">
          <div
              class="w-full aspect-[1200/630] rounded-lg overflow-hidden preview-canvas"
              :style="{
              background: `linear-gradient(${properties.gradient.angle}deg, ${properties.gradient.start}, ${properties.gradient.end})`
            }"
          >
            <div class="w-full h-full flex flex-col items-center justify-center p-12 text-white">
              <p class="text-lg mb-4">{{ properties.tag }}</p>
              <h1 class="text-4xl font-bold text-center">{{ properties.title }}</h1>
              <img v-if="properties.logo" :src="properties.logo" class="mt-8 h-16" alt="Logo"/>
            </div>
          </div>
        </div>

        <Export />

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const properties = ref({
  tag: 'Marketing',
  title: 'Generate Beautiful Open Graph Images',
  logo: null,
  gradient: {
    start: '#FF0080',
    end: '#FF8C00',
    angle: 45
  }
})

const templates = ref([
  {id: 1, preview: 'div', name: 'Default'},
  {id: 2, preview: 'div', name: 'Centered'},
  {id: 3, preview: 'div', name: 'Split'},
])

const selectedTemplate = ref(templates.value[0])

const gradientColors = ref([
  {start: '#FF0080', end: '#FF8C00'},
  {start: '#7928CA', end: '#FF0080'},
  {start: '#FF4D4D', end: '#F9CB28'},
  {start: '#00DFD8', end: '#007CF0'},
  {start: '#7928CA', end: '#00DFD8'},
  {start: '#FF4D4D', end: '#F9CB28'},
  {start: '#00DFD8', end: '#007CF0'},
  {start: '#7928CA', end: '#00DFD8'},
])

const selectTemplate = (template) => {
  selectedTemplate.value = template
}

const selectGradient = (gradient) => {
  properties.value.gradient.start = gradient.start
  properties.value.gradient.end = gradient.end
}

const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      properties.value.logo = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style>
</style>