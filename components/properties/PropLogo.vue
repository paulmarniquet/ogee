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
  <div>
    <label class="block text-sm font-medium text-gray-700">Logo</label>
    <div class="mt-4">

      <div class="flex items-center justify-center gap-4" v-if="logo?.src">
        <div class="relative w-max flex items-center justify-center">
          <UPopover mode="hover">
            <img
                :src="logo.src"
                alt="Uploaded Logo"
                :class="logo.width && logo.height ? 'w-' + logo.width + ' h-' + logo.height + 'object-cover' : 'w-12 h-12'"
            />
            <template #content>
              <div class="flex items-center justify-between">
                <UButton
                    class="text-red-600 text-sm cursor-pointer bg-white hover:bg-red-50"
                    @click="clearImage">
                  <UIcon class="border-1 rounded-full" name="line-md:remove" />
                  Clear
                </UButton>
              </div>
            </template>
          </UPopover>
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
