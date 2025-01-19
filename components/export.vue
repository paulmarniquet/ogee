<script setup lang="ts">
import html2canvas from "html2canvas-pro";

const exportImage = async () => {
  const element: HTMLElement | null = document.querySelector('.preview-canvas');

  try {
    if (!element) {
      throw new Error('Element not found');
    }

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
      backgroundColor: null,
    });

    // Création du lien pour télécharger l'image
    const link = document.createElement('a');
    link.download = 'ogeez.png';
    link.href = canvas.toDataURL('image/png');
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
    <UIcon name="line-md:downloading-loop" class="text-white w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
    <span class="text-white">Generate</span>
  </UButton>
</template>

<style scoped>
</style>
