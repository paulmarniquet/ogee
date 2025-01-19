<script setup lang="ts">

const props = defineProps({
  noise: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:noise']);

const localNoise = ref(props.noise);

watch(
    () => props.noise,
    (newNoise) => {
      localNoise.value = newNoise;
    }
);

watch(localNoise, (newNoise) => {
  emit('update:noise', newNoise);
});
</script>

<template>
  <div>
    <label class="block font-bold text-gray-700 mb-4 mt-6">Noise</label>

    <div class="flex items-center justify-center gap-4">
      <USlider
          :min="0"
          :max="1"
          :step="0.1"
          v-model="localNoise"
          class="mt-2"
      />
      <span class="font-semibold">{{ localNoise }}</span>
    </div>
  </div>
</template>
