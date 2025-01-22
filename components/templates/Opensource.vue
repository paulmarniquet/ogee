<script setup lang="ts">
import {generateGridPattern} from "~/composables/gridPatterns";

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
  },
});

</script>

<template>
    <div
        class="w-full overflow-hidden preview-canvas relative"
        :style="{
        background: `linear-gradient(${properties.gradient?.angle}deg, ${properties.gradient?.start}, ${properties.gradient?.end})`,
        aspectRatio: properties.canvas?.width / properties.canvas?.height
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
            alt="Noise"/>
      </div>

      <!-- Conteneur du contenu -->
      <div
          class="z-10 flex flex-col items-center text-center z-[100] relative "
          :style="{ marginTop: '2rem', rowGap: '0.5rem' }"
      >
        <!-- Tag -->

        <p
            v-if="properties.tag?.text !== undefined"
            :style="{
            fontFamily: (properties.tag?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.tag?.fontWeight,
            fontSize: properties.tag?.fontSize + 'px',
            color: properties.tag?.color
          }"
            class="text-lg border rounded-full p-0.5 px-2.5 tracking-wider"
            :class="props.tag?.color"
        >
          {{ properties.tag.text }}
        </p>

        <!-- Titre -->
        <h1
            v-if="properties.title?.text"
            class="flex-shrink-0"
            :style="{
            fontFamily: properties.title?.fontFamily || 'Roboto, sans-serif',
            fontWeight: properties.title?.fontWeight,
            fontSize: properties.title?.fontSize + 'px',
            color: properties.title?.color,
            letterSpacing: '-0.025em',
          }"
        >
          {{ properties.title.text }}
        </h1>
      </div>

      <!-- Image -->
      <div
          v-if="properties.image?.src"
          class="mt-4 z-[100] relative w-full flex justify-center"
          :style="{
          paddingRight: '4rem',
          paddingLeft: '4rem',
        }"
      >
        <img
            :src="properties.image.src"
            class="rounded-lg"
            alt="Image"
            :style="{ borderRadius: '0.75rem' }"
        />
      </div>
    </div>

</template>

<style scoped>

</style>