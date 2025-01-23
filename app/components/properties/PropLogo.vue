<script setup lang="ts">
const props = defineProps({
  logo: {
    type: Object,
    required: true,
    default: null,
  },
});
const emit = defineEmits(['update:logo']);

const handleLogoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      emit('update:logo', {
        src: e.target?.result as string,
        width: props.logo?.width || 12,
        height: props.logo?.height || 12
      });
    };
    reader.readAsDataURL(file);
  }
};

// Fonction pour supprimer le logo
const clearLogo = () => {
  emit('update:logo', null);
};
</script>

<template>
  <div class="my-2">
    <label class="block text-sm font-medium text-gray-700">Logo</label>
    <div class="mt-4">

      <div v-if="logo?.src" class="flex items-center justify-center gap-4">
        <div class="relative w-max flex items-center justify-center group">
          <img
              :src="logo.src"
              alt="Uploaded Logo"
              class="max-w-22 max-h-12 object-cover border-1 border-gray-200 rounded-lg"
          />
          <UButton
              variant="link"
              class="text-red-600 p-2 text-sm underline cursor-pointer absolute rounded-full bg-white -top-4 -right-4 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
              @click="clearLogo">
            <UIcon name="lucide:trash" class="w-4 h-4 bg-red"/>
          </UButton>
        </div>
      </div>

      <div v-else>
        <input
            type="file"
            @change="handleLogoUpload"
            accept="image/*"
            class="block w-full text-sm text-gray-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-1 file:border-gray-300 file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
