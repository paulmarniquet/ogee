<script setup lang="ts">


const props = defineProps({
  gradient: {
    type: Object,
    required: true,
  },
});

const items = ref([
  {label: 'Gradient', key: 'gradient'},
  {label: 'Colors', key: 'colors'},
]);

const emit = defineEmits(['update:gradient']);

const selectGradient = (newGradient: any) => {
  const updatedGradient = {
    colorStops: newGradient.colorStops,
    angle: newGradient.angle !== undefined ? newGradient.angle : props.gradient.angle,
  };
  emit('update:gradient', updatedGradient);
};

const activeTab = ref(items.value[0].key);

</script>

<template>

  <!-- Background Options -->
  <div>
    <label class="block font-bold text-gray-700 mb-2 mt-6">Background</label>
    <h3 class="text-sm text-gray-500 mb-4">Select a background color or gradient</h3>

    <UTabs
        color="neutral"
        :items="items" v-model:active="activeTab" class="w-full">
      <template #content="{ item }">

        <div v-if="item.key === 'gradient'">
          <div class="flex flex-wrap gap-2">
            <UButton
                v-for="(color, index) in gradientColors"
                :key="index"
                @click="selectGradient(color)"
                aria-label="Gradient"
                class="w-8 h-8 rounded-lg cursor-pointer hover:scale-105
                 transition duration-300 ease-in-out focus:outline-none focus:border-2 focus:border-primary-600
                 focus:hover:scale-100"
                :style="{
                background:  generateGradient(color.colorStops, gradient.angle)
              }"
            />
          </div>

          <label class="block text-sm mt-4 font-medium text-gray-700">Angle</label>
          <div class="flex items-center justify-center gap-4">
            <USlider aria-label="Angle" size="xs" :min="0" :max="360" v-model="gradient.angle" class="mt-2"/>
            <span class="font-light border-1 border-gray-200 rounded-full px-2">{{ gradient.angle }}°</span>
          </div>
        </div>

        <div v-if="item.key === 'colors'">
          <div class="flex flex-wrap gap-2">
            <UButton
                aria-label="Color"
                v-for="(color, index) in solidColors"
                :key="index"
                @click="selectGradient({ colorStops: [color, color] })"
                class="w-8 h-8 rounded-lg cursor-pointer hover:scale-105
                 transition duration-300 ease-in-out focus:outline-none focus:border-2 focus:border-primary-600
                 focus:hover:scale-100"
                :style="{
                background: color
              }"
            />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>
</style>
