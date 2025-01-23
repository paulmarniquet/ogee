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
        class="w-full overflow-hidden preview-canvas relative"
        :style="{
        background: generateGradient(properties.gradient?.colorStops, properties.gradient?.angle),
        aspectRatio: properties.canvas?.width / properties.canvas?.height
      }"
    >
      <div
          class="absolute inset-0 z-0"
          :style="{
          backgroundImage: generateGridPattern({grid: {...properties.grid}}),
          backgroundRepeat: 'repeat',
          mask: `radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blurStart}%, rgba(0,0,0,0) ${blurEnd}%)`
        }"
      ></div>

      <div class="absolute inset-0 z-10 noise-container">
        <img
            src="../../assets/noise.svg"
            class="w-full h-full object-cover noise-image"
            :style="{
            opacity: properties.noise,
            imageRendering: 'high-quality',
            transform: 'scale(1.01)'
          }"
            alt="noise texture"
        />
      </div>

      <div class="w-full h-full flex relative">

        <div class="w-[55%] flex flex-col items-start justify-start p-6 text-white z-50 relative">

          <div v-if="properties.logo?.src">
            <img
                :src="properties.logo?.src"
                class="mb-12 max-w-22 max-h-12 object-cover"
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
          <img
              :src="properties.image?.src"
              class="w-full h-full object-cover object-left"
              alt="Image"
          />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>