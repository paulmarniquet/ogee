<template>
  <div class="my-2">
    <label class="block text-sm font-medium text-gray-700">Tag</label>
    <div class="flex rounded-md justify-center items-end">
      <UInput
          :value="props.tag.text"
          @input="handleTagChange"
          class="mt-1 block text-primary w-full rounded-md border-gray-300"
      />
      <FontSettings
          :font="props.tag.fontFamily"
          :size="props.tag.fontSize"
          :color="props.tag.color"
          :weight="props.tag.fontWeight"
          @update:font="(value) => updateTagProperty('fontFamily', value)"
          @update:size="(value) => updateTagProperty('fontSize', value)"
          @update:color="(value) => updateTagProperty('color', value)"
          @update:weight="(value) => updateTagProperty('fontWeight', value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

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

const updateTagProperty = (key: string, value: any) => {
  emit('update:tag', {...props.tag, [key]: value});
};
</script>


<style scoped>
</style>
