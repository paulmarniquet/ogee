<script setup lang="ts">
import {toPng} from 'html-to-image';

const props = defineProps({
  properties: {
    type: Object,
    required: true,
  },
});

const exportImage = async () => {
  const element = document.querySelector('.preview-canvas');

  try {
    if (!element) {
      return console.error('Element not found');
    }

    const dataUrl = await toPng((element as any), {
      quality: 1.0,
      pixelRatio: 1,
      skipAutoScale: true,
      canvasWidth: props.properties.canvas.width || 1200,
      canvasHeight: props.properties.canvas.height || 630,
      cacheBust: true,
    });

    const link = document.createElement('a');
    link.download = 'ogee.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error exporting image:', error);
  }
};
</script>

<template>
  <UButton
      class="btn-donate fixed bottom-4 right-[50%] p-2 px-4 bg-black hover:bg-black text-black shadow-lg z-[1000] !rounded-2xl cursor-pointer group
    transform translate-x-1/2 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center space-x-1"
      @click="exportImage"
  >
    <UIcon
        name="line-md:downloading-loop"
        class="text-white w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    />
    <span class="text-white">Generate</span>
  </UButton>
</template>

<style scoped>

/* Bouton export */
.btn-donate {
  --clr-font-main: hsla(0, 0%, 20%, 1);
  --btn-bg-1: #434343;
  --btn-bg-2: black;
  --btn-bg-color: #ffffff;
  --radii: 0.5em;
  cursor: pointer;
  padding: 0.8em 1.5em;
  min-width: 120px;
  min-height: 44px;
  font-weight: 500;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(
      325deg,
      var(--btn-bg-2) 0%,
      var(--btn-bg-1) 55%,
      var(--btn-bg-2) 90%
  );
  border: none;
  border-radius: var(--radii);
  color: transparent;
}

.btn-donate:hover {
  background-position: right top;
}

@media (prefers-reduced-motion: reduce) {
  .btn-donate {
    transition: linear;
  }
}
</style>