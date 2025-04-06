<script setup lang="ts">

import GridEffect from "~/components/effects/GridEffect.vue";
import NoiseEffect from "~/components/effects/NoiseEffect.vue";

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
        class="w-full overflow-hidden preview-canvas relative"
        :style="{
        background: generateGradient(properties.gradient?.colorStops, properties.gradient?.angle),
        aspectRatio: properties.canvas?.width / properties.canvas?.height
      }"
    >
      <GridEffect :blur-end="blurEnd" :grid="properties.grid" :blur-start="blurStart"/>
      <NoiseEffect :noise="properties.noise"/>

      <div class="w-full h-full flex relative">
        <div class="w-[55%] flex flex-col items-start justify-start p-6 text-white z-50 relative">

          <div v-if="properties.logo?.src">
            <NuxtImg
                :src="properties.logo?.src"
                class="mb-12"
                :style="{
                  width: `${properties.logo?.width * 0.25}rem`,
                  height: `${properties.logo?.height * 0.25}rem`
                }"
                alt="Logo"
            />
          </div>
          <div v-else class="mb-24"/>

          <p
              v-if="properties.tag?.text !== undefined"
              :style="{
            fontFamily: (properties.tag?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.tag?.fontWeight,
            fontSize: properties.tag?.fontSize + 'px',
            color: properties.tag?.color
          }"
              class="mb-4 border rounded-full p-0.5 px-2.5 tracking-[0.05em]"
              :class="props.tag?.color"
          >
            {{ properties.tag.text }}
          </p>
          <h1
              :style="{
            fontFamily: (properties.title?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.title?.fontWeight,
            fontSize: properties.title?.fontSize + 'px',
            color: properties.title?.color,
            lineHeight: 1.3
          }"
          >
            {{ properties.title?.text }}
          </h1>
        </div>


        <div v-if="properties.image && properties.image.src"
             class="w-[45%] h-full flex z-50 relative"
        >
          <div class="absolute top-16 left-0 w-full h-full">
            <NuxtImg
                :src="properties.image.src"
                class="w-full h-full object-cover object-left"
                alt="Image"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>