<script setup lang="ts">
import { generateGridPattern } from "~/composables/gridPatterns";

const props = defineProps({
  properties: {
    type: Object,
    required: true,
  },
  blurStart: {
    type: Number,
    required: true,
  },
  blurEnd: {
    type: Number,
    required: true,
  }
});

const canvas = ref({
  width: props.properties.canvas?.width,
  height: props.properties.canvas?.height,
});

const aspectRatio = computed(() => canvas.value.width / canvas.value.height);
</script>

<template>
  <div class="bg-white shadow-sm rounded-lg p-6">
    <div
        class="w-full overflow-hidden preview-canvas relative"
        :style="{
        background: `linear-gradient(${properties.gradient?.angle}deg, ${properties.gradient?.start}, ${properties.gradient?.end})`,
        aspectRatio: aspectRatio
      }"
    >

      <div
          class="absolute inset-0 z-0"
          :style="{backgroundImage: generateGridPattern({grid: {...properties.grid}}), backgroundRepeat: 'repeat',
              mask: `radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blurStart}%, rgba(0,0,0,0) ${blurEnd}%)`}"
      ></div>

      <div class="absolute inset-0 z-10 noise-container">
        <img
            src="@/assets/noise.svg"
            class="w-full h-full object-cover noise-image"
            :style="{opacity: properties.noise, imageRendering: 'high-quality', transform: 'scale(1.01)'}"
            alt="noise texture"/>
      </div>

      <div class="w-full h-full flex flex-col items-center justify-center p-12 text-white z-50 relative">
        <p v-if="properties.tag?.text !== undefined"
           :style="{
                  fontFamily: properties.tag?.fontFamily + ', sans-serif' ?? 'Roboto, sans-serif',
                  fontWeight: properties.tag?.fontWeight,
                  fontSize: properties.tag?.fontSize + 'px',
                  color: properties.tag?.color,
                }"
           class="text-lg mb-4">{{ properties.tag.text }}</p>
        <h1
            class="text-center"
            :style="{
                  fontFamily: properties.title?.fontFamily + ', sans-serif' ?? 'Roboto, sans-serif',
                  fontWeight: properties.title?.fontWeight,
                  fontSize: properties.title?.fontSize + 'px',
                  color: properties.title?.color}">{{ properties.title?.text }}</h1>
        <img v-if="properties.logo" :src="properties.logo" class="mt-8 h-16" alt="Logo"/>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>