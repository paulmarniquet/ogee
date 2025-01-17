<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';
import {gradientColors} from "~/utils/colors";

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

// Déclarez les événements que ce composant peut émettre
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
    <div class="flex flex-wrap gap-2">
      <button
          v-for="(color, index) in gradientColors"
          :key="index"
          @click="selectGradient(color)"
          class="w-8 h-8 rounded-lg cursor-pointer"
          :style="{
        background: `linear-gradient(to right, ${color.colorStops.join(', ')})`
      }"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
