<script setup lang="ts">
useScriptPlausibleAnalytics({
  domain: 'ogee.pro',
  scriptInput: {
    src: "https://plausible.paulmarniquet.fr/js/script.js",
    defer: true,
    'data-domain': 'ogee.pro'
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
