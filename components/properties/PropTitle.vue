<script setup lang="ts">
const props = defineProps({
  title: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['update:title']);

const handleTextChange = (event: Event) => {
  emit('update:title', {...props.title, text: (event.target as HTMLInputElement).value});
};

const handleFontChange = (key: keyof typeof props.title) => (value: string | number) => {
  emit('update:title', {...props.title, [key]: value});
};
</script>

<template>
  <label class="block text-sm font-medium text-gray-700">Title</label>
  <div class="space-y-4">
    <!-- Input for Title Text -->
    <div class="flex rounded-md justify-center items-end">
      <UInput
          variant="outline"
          :value="props.title.text"
          @input="handleTextChange"
          placeholder="Enter title text"
          class="mt-1 block text-primary w-full rounded-md"
      />
      <!-- Font Settings -->
      <FontSettings :font="props.title" @change="handleFontChange"/>
    </div>

  </div>
</template>