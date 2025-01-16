<script setup lang="ts">

</script>

<template>
  <header class="flex items-center justify-between p-4 max-w-6xl mx-auto bg-white">
    <slot name="header" class="flex items-center space-x-4">
      <div class="flex items-center space-x-3">
        <img src="@/assets/logo.png" alt="ogeez" class="w-8 h-8"/>
        <h1 class="title text-xl">ogeez</h1>
      </div>
    </slot>

    <NuxtLink to="https://github.com/paulmarniquet/ogeez" class="text-primary hover:text-primary-600">
      <UIcon name="grommet-icons:github" class="w-8 h-8 text-primary-500"/>
    </NuxtLink>
  </header>
  <main>
    <slot/>
  </main>
</template>


<style scoped>

</style>