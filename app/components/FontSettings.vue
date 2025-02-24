<script setup lang="ts">

const props = defineProps({
  font: {type: String, required: true},
  size: {type: Number, required: true},
  color: {type: String, required: true},
  weight: {type: Number, required: true},
});
const emit = defineEmits(['update:font', 'update:size', 'update:color', 'update:weight']);

const selectedWeight = computed(() => props.weight);
</script>

<template>
  <UPopover>
    <UButton
        color="neutral"
        aria-label="Settings"
        variant="subtle"
        icon="lucide:chart-no-axes-gantt"
        class="ml-1 max-h-8 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
    />
    <template #content>
      <div class="p-4 rounded-lg shadow-md w-72">
        <!-- Font Family -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Family</label>
          <USelect
              :items=fontFamilies
              :modelValue="props.font"
              @update:modelValue="value => emit('update:font', value)"
              class="w-full px-3 py-2 rounded-md shadow-sm"
          />
        </div>

        <!-- Font Weight -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Weight</label>
          <USelect
              :items="fontWeight"
              :modelValue="selectedWeight"
              item-value="value"
              item-label="label"
              @update:modelValue="value => emit('update:weight', value)"
              class="w-full px-3 py-2 rounded-md shadow-sm"
          />
        </div>

        <!-- Font Size -->
        <div class="mb-4 flex gap-4 items-center justify-between">
          <label class="block text-sm font-medium text-gray-700 mb-1 w-2/3">Size</label>
          <UInputNumber
              :modelValue="props.size"
              @update:modelValue="value => emit('update:size', value)"
              class="max-w-24"
          >
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
                v-for="color in ['#000', '#1E293B', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#F3F4F6']"
                :key="color"
                :style="{ backgroundColor: color }"
                class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                @click="emit('update:color', color)"
            ></div>
          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>
