<script setup lang="ts">
const props = defineProps({
  title: String,
});
const emit = defineEmits(['update:title']);

const handleTitleChange = (event: Event) => {
  emit('update:title', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="block text-sm font-medium text-gray-700">Title</label>
  <div class="flex rounded-md justify-center items-end">
    <UInput
        variant="outline"
        :value="props.title"
        @input="handleTitleChange"
        class="mt-1 block text-primary w-full rounded-md"
    />
    <FontSettings/>
  </div>
</template>

<style scoped>
</style>
