<script setup lang="ts">
import {ref} from 'vue'

const isDarkMode = ref(false)
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
          alt="Ogee Logo"
          width="32"
          height="32"
      />
    </slot>

    <div>
      <button
          @click="toggleTheme"
          class="flex items-center justify-center w-10 h-10 rounded-full hover:scale-105 transition cursor-pointer"
      >
        <UIcon
            :name="isDarkMode ? 'lucide:moon' : 'lucide:sun-dim'"
            class="w-6 h-6"
        />
      </button>
    </div>
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
