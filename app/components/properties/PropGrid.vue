<script setup lang="ts">

const props = defineProps({
  grid: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:grid']);

const grids: any = [['none', 'ant-design:close-circle-outlined'],
  ['grid', 'tdesign:artboard'],
  ['dots', 'ant-design:ellipsis-outlined'],
  ['graph', 'hugeicons:dialpad-square-01']];

const updateGrid = (key: string, value: any) => {
  emit('update:grid', {...props.grid, [key]: value});
};
</script>

<template>
  <div>
    <label class="block font-bold text-gray-700 mb-4 mt-6">Grid</label>

    <div class="flex items-start justify-center gap-1">
      <!-- Pattern Section -->
      <div class="flex space-x-2 mb-4 items-center justify-center">
        <button
            aria-label="Grid Pattern"
            v-for="pattern in grids.map((g : string) => g[0])"
            :key="pattern"
            @click="updateGrid('pattern', pattern)"
            :class="[
                  'px-2 py-1 rounded-xl border w-12 flex flex-col items-center justify-center cursor-pointer text-sm gap-1 hover:bg-gray-100 transition duration-300 ease-in-out',
                  grid.pattern === pattern ? 'border-primary-600' : 'border-gray-300',
                ]"
        >
          <UIcon
              :name="grids.find((g : string) => g[0] === pattern)[1]" class="w-5 h-5"/>
        </button>
      </div>

      <UPopover>
        <UButton
            aria-label="Settings"
            color="neutral"
            variant="subtle"
            icon="lucide:chart-no-axes-gantt"
            class="ml-1 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
        <template #content>
          <div class="p-4 bg-white rounded-lg shadow-md w-72">
            <!-- Style Section -->
            <div class="mb-4">
              <div class="mb-4">
                <label class="block text-sm mt-4 font-medium text-gray-700">Opacity</label>
                <div class="flex items-center justify-center gap-4">
                  <USlider
                      aria-label="Opacity"
                      size="xs"
                           :min="0"
                           :max="0.8"
                           :step="0.1"
                           v-model="grid.opacity"
                           class="mt-2"
                           @input="updateGrid('opacity', grid.opacity)"
                  />
                  <span class="font-light border-1 border-gray-200 rounded-full px-2">{{ grid.opacity }}</span>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-sm mt-4 font-medium text-gray-700">Blur Radius</label>
                <div class="flex items-center justify-center gap-4">
                  <USlider
                      aria-label="Blur Radius"
                      size="xs"
                           :min="0"
                           :max="10"
                           :step="1"
                           v-model="grid.blur"
                           class="mt-2"
                           @input="updateGrid('blur', grid.blur)"
                  />
                  <span class="font-light border-1 border-gray-200 rounded-full px-2">{{ grid.blur }}</span>
                </div>
              </div>

              <div class="mb-4 flex gap-4 items-center justify-between">
                <label class="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div class="flex flex-wrap gap-1 w-2/3 justify-end">
                  <div
                      v-for="color in ['#000', '#1E293B', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#F3F4F6']"
                      :key="color"
                      :style="{ backgroundColor: color }"
                      class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                      @click="updateGrid('color', color)"
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<style scoped>
</style>
