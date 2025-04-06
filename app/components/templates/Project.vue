<script setup lang="ts">

import NoiseEffect from "~/components/effects/NoiseEffect.vue";
import GridEffect from "~/components/effects/GridEffect.vue";

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
</script>

<template>
  <div class="shadow-sm rounded-lg">
    <div
        class="w-full h-full overflow-hidden preview-canvas relative flex items-center justify-center"
        :style="{
      background: generateGradient(properties.gradient?.colorStops, properties.gradient?.angle),
      aspectRatio: properties.canvas?.width / properties.canvas?.height
      }"
    >
      <GridEffect :blur-end="blurEnd" :grid="properties.grid" :blur-start="blurStart"/>
      <NoiseEffect :noise="properties.noise"/>

      <!-- Content -->
      <div class="relative z-20 text-center flex flex-col items-center">
        <!-- Logo -->
        <div v-if="properties.logo?.src" class="mb-0.5">
          <NuxtImg
              :src="properties.logo?.src"
              :style="{
                  width: `${properties.logo?.width * 0.25}rem`,
                  height: `${properties.logo?.height * 0.25}rem`
                }"
              alt="Logo"
          />
        </div>

        <h1
            :style="{
            fontFamily: (properties.title?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.title?.fontWeight,
            fontSize: properties.title?.fontSize + 'px',
            color: properties.title?.color,
            lineHeight: 1.3
          }">
          {{ properties.title?.text }}
        </h1>

        <p
            v-if="properties.description?.text"
            :style="{
            fontFamily: (properties.description?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.description?.fontWeight,
            fontSize: properties.description?.fontSize + 'px',
            color: properties.description?.color
          }"
            class="text-sm"
        >
          {{ properties.description.text }}
        </p>
      </div>
    </div>
  </div>
</template>
