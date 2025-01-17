<script setup lang="ts">
import FontSettings from "~/components/FontSettings.vue";

const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['update:tag'])

const handleTagChange = (event: Event) => {
  emit('update:tag', {...props.tag, text: (event.target as HTMLInputElement).value});
};
</script>

<template>
  <label class="block text-sm font-medium text-gray-700">Tag</label>
  <div class="flex rounded-md justify-center items-end">
    <UInput
        :value="props.tag.text"
        @input="handleTagChange"
        class="mt-1 block text-primary w-full rounded-md border-gray-300"
    />
    <FontSettings/>
  </div>
</template>

<style scoped>
</style>
