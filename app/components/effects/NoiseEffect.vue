<script setup lang="ts">
const props = defineProps({
  noise: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="absolute inset-0 z-10 noise-container">
    <NuxtImg
        src="/noise.svg"
        class="w-full h-full object-cover noise-image"
        :style="{
            opacity: noise,
            imageRendering: 'high-quality',
            transform: 'scale(1.01)'
          }"
        alt="noise texture"
    />
  </div>
</template>

<style scoped>

</style>