<script setup lang="ts">
const isDarkMode = ref(true)
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <header class="flex items-center justify-between p-4 max-w-6xl mx-auto">
    <slot name="header" class="flex items-center space-x-4">
      <NuxtImg
          :src="isDarkMode ? 'logo.png' : 'white_logo.png'"
          alt="Ogee - Logo"
          width="32"
          height="32"
      />
    </slot>

      <UButton
          @click="toggleTheme"
          variant="ghost"
          :icon="isDarkMode ? 'lucide:moon' : 'lucide:sun-dim'"
          class="flex items-center justify-center w-10 h-10 rounded-full hover:scale-105 transition cursor-pointer"
      />
  </header>


  <main>
    <slot/>
  </main>

  <footer class="p-4 max-w-6xl mx-auto">
    <slot name="footer" class="flex items-center justify-center space-x-4">
      <USeparator>
        <NuxtLink
            aria-label="Go to GitHub Repository"
            to="https://github.com/paulmarniquet/ogee"
            class="text-primary hover:text-primary-600"
        >
          <UIcon name="grommet-icons:github" class="w-8 h-8 text-primary-500"/>
        </NuxtLink>
      </USeparator>
    </slot>
  </footer>
</template>

<style scoped>
</style>
