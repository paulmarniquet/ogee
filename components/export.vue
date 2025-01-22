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

    const dataUrl = await toPng((element as HTMLElement), {
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
      class="fixed bottom-4 right-[50%] p-2 px-4 bg-black hover:bg-black text-black shadow-lg z-50 rounded-lg cursor-pointer group
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
/* Les styles restent inchangés */
</style>