<script setup lang="ts">
const properties = defineProps({
  logo: {
    type: String,
    required: false,
    default: null,
  },
})
const emit = defineEmits(['update:logo'])

const handleLogoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      emit('update:logo', e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }
}

const clearLogo = () => {
  emit('update:logo', null)
}
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">Logo</label>
    <div class="mt-4">
      <div v-if="logo" class="flex items-center justify-center gap-4">
        <div class="relative h-16 w-max flex items-center justify-center">
          <img :src="logo" alt="Uploaded Logo" class="h-16 rounded shadow-md"/>
          <UButton
              variant="link"
              class="text-red-600 text-sm underline cursor-pointer absolute rounded-full bg-white -top-4 -right-4"
              @click="clearLogo"
          >
            <UIcon name="heroicons-outline:trash" class="w-6 h-6 bg-red"/>
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
