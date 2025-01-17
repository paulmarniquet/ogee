<script setup lang="ts">
</script>

<template>
  <UPopover>
    <UButton color="neutral" variant="subtle" icon="mingcute:settings-2-line"
             class="ml-1 max-h-8 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
    <template #content>
      <div class="p-4 bg-white rounded-lg shadow-md w-72">
        <!-- Font Family -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Family</label>
          <USelect
              :items="['Inter', 'Roboto', 'Arial']"
              class="w-full px-3 py-2 rounded-md shadow-sm"/>
        </div>

        <!-- Font Weight -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Weight</label>
          <USelect
              :items="['Regular', 'Bold', 'Light']"
              class="w-full px-3 py-2 rounded-md shadow-sm"/>
        </div>

        <!-- Font Size -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Size</label>
          <UInputNumber class="max-w-24">
            <template #decrement>
              <UButton size="xs" icon="i-lucide-minus"/>
            </template>

            <template #increment>
              <UButton size="xs" icon="i-lucide-plus"/>
            </template>
          </UInputNumber>
        </div>

        <!-- Text Color -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-2">Color</label>
          <div class="flex flex-wrap gap-1 w-2/3 justify-end">
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #000"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #1E293B"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #374151"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #4B5563"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #6B7280"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #9CA3AF"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #D1D5DB"
            ></div>
            <div
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                style="background-color: #F3F4F6"
            ></div>
          </div>
        </div>
      </div>
    </template>

  </UPopover>
</template>

<style scoped>

</style>