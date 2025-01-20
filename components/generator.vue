<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Template Selection -->
      <div class="lg:col-span-3 flex gap-4 overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
        <div v-for="template in templates" :key="template.id" @click="selectTemplate(template)">
          <component :is="previewComponents[template.preview]"
                     :class="{ 'border-1 rounded-xl border-gray-200': selectedTemplate.id === template.id }"
                     :properties="template.properties" :isSelected="selectedTemplate.id === template.id"/>
        </div>
      </div>


      <!-- Properties Panel -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-2">Template Properties</h2>
        <h3 class="text-sm text-gray-500 mb-4">Customize the properties of the selected template</h3>
        <div class="space-y-4">
          <div v-for="key in Object.keys(properties)" :key="key">
            <component
                v-model:[key]="properties[key]"
                :is="propertyComponents[key]"
                class="mt-2"
            />
          </div>
        </div>
      </div>

      <!-- Preview Area -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow-sm rounded-lg p-6">
          <div
              class="w-full aspect-[1200/630] overflow-hidden preview-canvas relative"
              :style="{background: `linear-gradient(${properties.gradient?.angle}deg, ${properties.gradient?.start}, ${properties.gradient?.end})`}">
            <div
                class="absolute inset-0 z-0"
                :style="{backgroundImage: generateGridPattern({grid: {...properties.grid}}), backgroundRepeat: 'repeat',
              mask: `radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blurStart}%, rgba(0,0,0,0) ${blurEnd}%)`}"
            ></div>

            <div class="absolute inset-0 z-10 noise-container">
              <img
                  src="@/assets/noise.svg"
                  class="w-full h-full object-cover noise-image"
                  :style="{opacity: properties.noise, imageRendering: 'high-quality', transform: 'scale(1.01)'}"
                  alt="noise texture"/>
            </div>

            <div class="w-full h-full flex flex-col items-center justify-center p-12 text-white z-50 relative">
              <p v-if="properties.tag?.text !== undefined"
                 :style="{
                  fontFamily: properties.tag?.fontFamily + ', sans-serif' ?? 'Roboto, sans-serif',
                  fontWeight: properties.tag?.fontWeight,
                  fontSize: properties.tag?.fontSize + 'px',
                  color: properties.tag?.color,
                }"
                 class="text-lg mb-4">{{ properties.tag.text }}</p>
              <h1
                  class="text-center"
                  :style="{
                  fontFamily: properties.title?.fontFamily + ', sans-serif' ?? 'Roboto, sans-serif',
                  fontWeight: properties.title?.fontWeight,
                  fontSize: properties.title?.fontSize + 'px',
                  color: properties.title?.color}">{{ properties.title?.text }}</h1>
              <img v-if="properties.logo" :src="properties.logo" class="mt-8 h-16" alt="Logo"/>
            </div>
          </div>
        </div>

        <Export/>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropTag from "@/components/properties/PropTag.vue";
import PropTitle from "@/components/properties/PropTitle.vue";
import PropLogo from "@/components/properties/PropLogo.vue";
import PropGradient from "@/components/properties/PropGradient.vue";
import PropGrid from "~/components/properties/PropGrid.vue";
import PropNoise from "~/components/properties/PropNoise.vue";
import {templateCategories} from "~/utils/templates.ts";
import {generateGridPattern} from "~/composables/gridPatterns.ts";
import Marketing from "~/components/preview/Marketing.vue";
import OpenSource from "~/components/preview/OpenSource.vue";

const previewComponents = {
  marketing: Marketing,
  opensource: OpenSource,
};

const propertyComponents = {
  tag: PropTag,
  title: PropTitle,
  logo: PropLogo,
  gradient: PropGradient,
  grid: PropGrid,
  noise: PropNoise,
};

const blurStart = computed(() => {
  const blurValue = properties.value.grid?.blur || 0;
  return Math.min(blurValue * 8, 40);
});

const blurEnd = computed(() => {
  const blurValue = properties.value.grid?.blur || 0;
  return Math.min(blurValue * 15, 100);
});

const templates = ref(
    templateCategories.flatMap((category) => category.templates)
);

const selectedTemplate = ref(templates.value[0]);
const properties = ref({...selectedTemplate.value.properties});

const selectTemplate = (template) => {
  localStorage.setItem(template.id, JSON.stringify(template.properties));
  selectedTemplate.value = template;
  properties.value = JSON.parse(JSON.stringify(template.properties));
};

watch(selectedTemplate, (newTemplate) => {
  if (newTemplate) {
    if (localStorage.getItem(newTemplate.id)) {
      properties.value = JSON.parse(localStorage.getItem(newTemplate.id));
    } else {
      properties.value = {...newTemplate.properties};
    }
  }
});
</script>
