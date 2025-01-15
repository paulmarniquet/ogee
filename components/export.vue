<script setup lang="ts">
import html2canvas from "html2canvas";

const exportImage = async () => {
  const element: HTMLElement | null = document.querySelector('.preview-canvas')
  try {
    const canvas = await html2canvas(element as HTMLElement)
    const link = document.createElement('a')
    link.download = 'og-image.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('Error exporting image:', error)
  }
}
</script>

<template>
  <button class="fixed bottom-4 right-[50%] p-2 w-24 bg-white shadow-lg z-50 rounded-lg text-primary
    transform translate-x-1/2 hover:scale-105 transition-transform duration-300 ease-in-out"
          @click="exportImage">
    <LucideDownload />
    Export
  </button>
</template>

<style scoped>

</style>