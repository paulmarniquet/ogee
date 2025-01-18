<script setup lang="ts">
useScriptPlausibleAnalytics({
  domain: 'ogeez.paulmarniquet.fr',
  scriptInput: {
    src: "https://plausible.paulmarniquet.fr/js/script.js",
    defer: true,
    'data-domain': 'ogeez.paulmarniquet.fr'
  }
});
</script>


<template>
  <UApp>
    <NuxtLayout name="default">
      <Generator/>
    </NuxtLayout>
  </UApp>
</template>
