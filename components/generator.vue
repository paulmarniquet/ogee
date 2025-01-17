<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Template Selection -->
      <div class="lg:col-span-3 flex gap-4 overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
        <button
            v-for="template in templates"
            :key="template.id"
            @click="selectTemplate(template)"
            class="min-w-[200px] h-24 border-2 rounded-lg p-2 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            :class="selectedTemplate.id === template.id ? 'border-primary-600' : 'border-gray-200'"
        >
          <component :is="template.preview" class="w-full h-full"/>
        </button>
      </div>

      <!-- Properties Panel -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold mb-4">Template Properties</h2>
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
        <div class="bg-white shadow-sm p-6">
          <div
              class="w-full aspect-[1200/630] rounded-lg overflow-hidden preview-canvas"
              :style="{
              background: `linear-gradient(${properties.gradient.angle}deg, ${properties.gradient.start}, ${properties.gradient.end})`
            }"
          >
            <div class="w-full h-full flex flex-col items-center justify-center p-12 text-white">
              <p class="text-lg mb-4">{{ properties.tag }}</p>
              <h1 class="text-4xl font-bold text-center">{{ properties.title }}</h1>
              <img v-if="properties.logo" :src="properties.logo" class="mt-8 h-16" alt="Logo"/>
            </div>
          </div>
        </div>

        <Export />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PropTag from '@/components/properties/PropTag.vue';
import PropTitle from '@/components/properties/PropTitle.vue';
import PropLogo from '@/components/properties/PropLogo.vue';
import PropGradient from '@/components/properties/PropGradient.vue';

// Define property components mapping
const propertyComponents = {
  tag: PropTag,
  title: PropTitle,
  logo: PropLogo,
  gradient: PropGradient,
};

const properties = ref({
  tag: 'Marketing',
  title: 'Generate Beautiful Open Graph Images',
  logo: null,
  gradient: {
    start: '#FF0080',
    end: '#FF8C00',
    angle: 45,
  },
});

const templates = ref([
  {id: 1, preview: 'div', name: 'Default'},
  {id: 2, preview: 'div', name: 'Centered'},
  {id: 3, preview: 'div', name: 'Split'},
  {id: 4, preview: 'div', name: 'Bottom'},
]);

const selectedTemplate = ref(templates.value[0]);

const selectTemplate = (template) => {
  selectedTemplate.value = template;
};
</script>