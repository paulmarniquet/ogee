<script setup lang="ts">


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
  <div class="bg-white shadow-sm rounded-lg">
    <div
        class="w-full h-full overflow-hidden preview-canvas relative flex items-center justify-center"
        :style="{
      background: generateGradient(properties.gradient?.colorStops, properties.gradient?.angle),
        aspectRatio: properties.canvas?.width / properties.canvas?.height
      }"
    >
      <!-- Grid background -->
      <div
          class="absolute inset-0 z-0"
          :style="{
          backgroundImage: generateGridPattern({grid: {...properties.grid}}),
          backgroundRepeat: 'repeat',
          mask: `radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blurStart}%, rgba(0,0,0,0) ${blurEnd}%)`
        }"
      ></div>

      <!-- Noise texture -->
      <div class="absolute inset-0 z-10 noise-container">
        <NuxtImg
            src="/noise.svg"
            class="w-full h-full object-cover noise-image"
            :style="{
            opacity: properties.noise,
            imageRendering: 'high-quality',
            transform: 'scale(1.01)'
          }"
            alt="noise texture"
        />
      </div>

      <!-- Content -->
      <div class="relative z-20 text-center flex flex-col items-center gap-3">

        <div v-if="properties.logo?.src">
          <NuxtImg
              :src="properties.logo?.src"
              :style="{
                  width: `${properties.logo?.width * 0.25}rem`,
                  height: `${properties.logo?.height * 0.25}rem`
                }"
              alt="Logo"
          />
        </div>

        <p
            v-if="properties.description?.text"
            :style="{
            fontFamily: (properties.description?.fontFamily || 'Roboto') + ', sans-serif',
            fontWeight: properties.description?.fontWeight,
            fontSize: properties.description?.fontSize + 'px',
            color: properties.description?.color
          }"
            class="text-sm tracking-tight"
        >
          {{ properties.description.text }}
        </p>
      </div>
    </div>
  </div>
</template>
