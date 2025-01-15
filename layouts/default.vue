<script setup lang="ts">

</script>

<template>
    <header class="flex items-center justify-between p-4 max-w-6xl mx-auto bg-white">
      <slot name="header">
        <h1 class="text-2xl font-bold text-primary">
          ogeez
        </h1>
      </slot>

      <NuxtLink to="https://github.com/paulmarniquet/ogeez" class="text-primary hover:text-primary-600">
        <UIcon name="grommet-icons:github" class="w-5 h-5 text-primary-500" />
      </NuxtLink>
    </header>
    <main>
      <slot/>
    </main>
</template>


<style scoped>

</style>