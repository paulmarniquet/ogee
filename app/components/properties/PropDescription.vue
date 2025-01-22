<template>
  <label class="block text-sm font-medium text-gray-700">Description</label>
  <div class="flex rounded-md justify-center items-end">
    <UInput
        :value="props.description.text"
        @input="handleDescriptionChange"
        class="mt-1 block text-primary w-full rounded-md border-gray-300"
    />
    <FontSettings
        :font="props.description.fontFamily"
        :size="props.description.fontSize"
        :color="props.description.color"
        :weight="props.description.fontWeight"
        @update:font="(value) => updateDescriptionProperty('fontFamily', value)"
        @update:size="(value) => updateDescriptionProperty('fontSize', value)"
        @update:color="(value) => updateDescriptionProperty('color', value)"
        @update:weight="(value) => updateDescriptionProperty('fontWeight', value)"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  description: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['update:description'])

const handleDescriptionChange = (event: Event) => {
  emit('update:description', {...props.description, text: (event.target as HTMLInputElement).value});
};

const updateDescriptionProperty = (key: string, value: any) => {
  emit('update:description', {...props.description, [key]: value});
};
</script>


<style scoped>
</style>
