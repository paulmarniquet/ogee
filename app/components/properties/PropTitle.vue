<template>
  <div class="my-2">
    <label class="block text-sm font-medium text-gray-700">Title</label>
    <div class="space-y-4">
      <!-- Input for Title Text -->
      <div class="flex rounded-md justify-center items-end">
        <UInput
            aria-label="Title Text"
            variant="outline"
            :value="props.title.text"
            @input="handleTextChange"
            placeholder="Enter title text"
            class="mt-1 block text-primary w-full rounded-md"
        />
        <!-- Font Settings -->
        <FontSettings
            :font="props.title.fontFamily"
            :size="props.title.fontSize"
            :color="props.title.color"
            :weight="props.title.fontWeight"
            @update:font="(value) => updateTitleProperty('fontFamily', value)"
            @update:size="(value) => updateTitleProperty('fontSize', value)"
            @update:color="(value) => updateTitleProperty('color', value)"
            @update:weight="(value) => updateTitleProperty('fontWeight', value)"
        />
      </div>
    </div>
  </div>
</template>

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

const updateTitleProperty = (key: string, value: any) => {
  emit('update:title', {...props.title, [key]: value});
};
</script>
