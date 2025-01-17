<script setup lang="ts">
const props = defineProps({
  tag: String,
})
const emit = defineEmits(['update:tag'])

const handleTagChange = (event: Event) => {
  emit('update:tag', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="block text-sm font-medium text-gray-700">Tag</label>
  <UInput
      :value="props.tag"
      @input="handleTagChange"
      class="mt-1 block text-primary w-full rounded-md border-gray-300"
  />
</template>

<style scoped>
</style>
