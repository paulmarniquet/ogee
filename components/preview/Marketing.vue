<script setup lang="ts">
</script>

<template>
  <div
      class="flex flex-col gap-2 w-48 h-24 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out overflow-hidden">

    <div class="h-full w-full">
      <div class="bg-gray-200 h-3 w-3 rounded-full md:h-6 md:w-6"></div>

      <div class="rounded-3xl flex aspect-video h-full w-full justify-center space-x-2 md:space-x-4">
        <div class="flex h-full w-1/2 flex-col space-y-1 pt-2 md:pt-4">
          <div class="rounded-3xl bg-gray-200 h-1 w-1/3 md:h-2"></div>
          <div class="rounded-3xl bg-gray-200 h-2 w-full md:h-4"></div>
        </div>

        <div class="rounded-3xl bg-gray-200 h-2/3 w-1/2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
