<script setup lang="ts">
const props = defineProps({
  grid: {
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
  <div
      class="absolute inset-0 z-0"
      :style="{
          backgroundImage: generateGridPattern({grid: grid}),
          backgroundRepeat: 'repeat',
          mask: `radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blurStart}%, rgba(0,0,0,0) ${blurEnd}%)`
        }"
  ></div>
</template>

<style scoped>

</style>