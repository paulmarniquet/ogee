<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    required: true,
    default: null,
  },
});
const emit = defineEmits(['update:image']);

const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      emit('update:image', {
        src: e.target?.result as string,
        width: props.image?.width || 48,
        height: props.image?.height || 24
      });
    };
    reader.readAsDataURL(file);
  }
};

// Fonction pour supprimer le image
const clearImage = () => {
  emit('update:image', null);
};
</script>

<template>
  <div class="my-2">
    <label class="block text-sm font-medium text-gray-700">Image</label>
    <div class="mt-4">
      <!-- Affichage du image -->
      <div v-if="image?.src" class="flex items-center justify-center gap-4">
        <div class="relative w-max flex items-center justify-center group">
          <NuxtImg
              :src="image.src"
              alt="Uploaded Image"
              class="object-cover w-48 h-24 border-gray-200 rounded-lg"
          />
          <UButton
              variant="link"
              aria-label="Clear Image"
              class="text-red-600 p-2 text-sm underline cursor-pointer absolute rounded-full bg-white -top-4 -right-4 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
              @click="clearImage">
            <UIcon name="lucide:trash" class="w-4 h-4 bg-red"/>
          </UButton>
        </div>
      </div>
      <div v-else>
        <input
            type="file"
            @change="handleImageUpload"
            accept="image/*"
            class="block w-full text-sm text-gray-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-1 file:border-gray-300 file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
