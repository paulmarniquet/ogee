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
  },
});

</script>

<template>
    <div
        class="w-full overflow-hidden preview-canvas relative"
        :style="{
        background: generateGradient(properties.gradient?.colorStops, properties.gradient?.angle),
        aspectRatio: properties.canvas?.width / properties.canvas?.height
      }"
    >

      <GridEffect :blur-end="blurEnd" :grid="properties.grid" :blur-start="blurStart"/>
      <NoiseEffect :noise="properties.noise"/>

      <!-- Conteneur du contenu -->
      <div
          class="flex flex-col items-center text-center z-[100] relative "
          :style="{ marginTop: '2rem', rowGap: '0.1rem' }"
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
            class="border rounded-full py-0.5 px-2 tracking-wider"
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
        <NuxtImg
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