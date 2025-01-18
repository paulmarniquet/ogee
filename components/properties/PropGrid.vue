<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
  grid: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:grid']);

const items = ref([
  {label: 'Pattern', key: 'pattern'},
  {label: 'Style', key: 'style'},
]);

const activeTab = ref(items.value[0].key);

const updategrid = (key: string, value: any) => {
  emit('update:grid', {...props.grid, [key]: value});
};
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-4">Grid</label>

    <div class="flex space-x-4 items-start justify-center">
      <!-- Pattern Section -->
      <div>
        <div class="flex space-x-2 mb-4">
          <button
              v-for="pattern in ['none', 'grid', 'graph', 'dots']"
              :key="pattern"
              @click="updategrid('pattern', pattern)"
              :class="[
                  'px-2 py-1 rounded border',
                  grid.pattern === pattern ? 'border-primary-600' : 'border-gray-300',
                ]"
          >
            {{ pattern }}
          </button>
        </div>
      </div>

      <UPopover>
        <UButton
            color="neutral"
            variant="subtle"
            icon="mingcute:settings-2-line"
            class="ml-1 max-h-8 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
        <template #content>
          <div class="p-4 bg-white rounded-lg shadow-md w-72">
            <!-- Style Section -->
            <div class="mb-4">
              <h3 class="text-sm font-semibold mb-2">Customize Style</h3>

              <div class="mb-4 flex gap-4 items-center justify-between">
                <label class="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div class="flex flex-wrap gap-1 w-2/3 justify-end">
                  <div
                      v-for="color in ['#000', '#1E293B', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#F3F4F6']"
                      :key="color"
                      :style="{ backgroundColor: color }"
                      class="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                      @click="updategrid('color', color)"
                  ></div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-sm mt-4 font-medium text-gray-700">Opacity</label>
                <div class="flex items-center justify-center gap-4">
                  <USlider
                      :min="0"
                      :max="1"
                      :step="0.1"
                      v-model="grid.opacity"
                      class="mt-2"
                      @input="updategrid('opacity', grid.opacity)"
                  />
                  <span class="font-semibold">{{ grid.opacity }}</span>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-sm mt-4 font-medium text-gray-700">Blur Radius</label>
                <div class="flex items-center justify-center gap-4">
                  <USlider
                      :min="0"
                      :max="50"
                      :step="1"
                      v-model="grid.blur"
                      class="mt-2"
                      @input="updategrid('blur', grid.blur)"
                  />
                  <span class="font-semibold">{{ grid.blur }}</span>
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
