<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';
import {gradientColors, solidColors} from "~/utils/colors";

defineProps({
  gradient: {
    type: Object,
    required: true,
  },
  gradientColors: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:gradient']);

// Fonction pour sélectionner un dégradé
const selectGradient = (gradient: any) => {
  const updatedGradient = {
    start: gradient.colorStops[0],
    end: gradient.colorStops[gradient.colorStops.length - 1],
    angle: 45,
  };
  emit('update:gradient', updatedGradient);
};
</script>

<template>
  <!-- Background Options -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-4">Background</label>

    <div>
      <label class="block text-sm mb-4 font-medium text-gray-700">Gradient</label>
      <div class="flex flex-wrap gap-2">
        <UButton
            v-for="(color, index) in gradientColors"
            :key="index"
            @click="selectGradient(color)"
            class="w-8 h-8 rounded-lg cursor-pointer"
            :style="{
        background: `linear-gradient(to right, ${color.colorStops.join(', ')})`
      }"
        />
      </div>

      <label class="block text-sm mt-4 mb-2 font-medium text-gray-700">Angle</label>
      <UInput
          type="number"
          v-model="gradient.angle"
          class="mt-1 block text-primary w-full rounded-md"
      />
    </div>

    <div>
      <label class="block text-sm mt-4 mb-2 font-medium text-gray-700">Basic Color</label>
      <div class="flex flex-wrap gap-2">
        <UButton
            v-for="(color, index) in solidColors"
            :key="index"
            @click="selectGradient({ colorStops: [color, color] })"
            class="w-8 h-8 rounded-lg cursor-pointer"
            :style="{
        background: color
      }"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
