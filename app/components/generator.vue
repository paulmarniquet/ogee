<script setup>

// State management
const selectedCategory = ref(templateCategories[0]);
const selectedTemplate = ref(selectedCategory.value.templates[0]);
const properties = ref({...selectedTemplate.value.properties});

const templates = computed(() => selectedCategory.value.templates);

const selectTemplate = (template) => {
  selectedTemplate.value = template;
  properties.value = reactive({...template.properties});
};

const selectCategory = (category) => {
  selectedCategory.value = category;
  const firstTemplate = category.templates[0];
  selectTemplate(firstTemplate);
};

// Grid radial mask properties
const blurStart = computed(() => {
  const blurValue = properties.value.grid?.blur || 0;
  return Math.min(blurValue * 8, 40);
});

const blurEnd = computed(() => {
  const blurValue = properties.value.grid?.blur || 0;
  return Math.min(blurValue * 15, 100);
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Template Selection -->
      <div class="lg:col-span-3 flex flex-col gap-2 overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
        <div class="flex flex-row gap-4">
          <div v-for="category in templateCategories" :key="category.id">
            <UButton
                @click="selectCategory(category)"
                class="px-4 py-2 flex bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <UIcon
                  v-if="category.icon"
                  :name="category.icon"
              />
              {{ category.name }}
            </UButton>
          </div>
        </div>
        <div class="flex flex-row gap-4 overflow-x-auto">
          <div
              v-for="template in templates"
              :key="template.id"
              @click="selectTemplate(template)"
              class="cursor-pointer"
          >
            <component
                v-if="template.name"
                :is="'preview-' + (template.name).toLowerCase()"
                :class="{ 'border-2 rounded-xl border-gray-200': selectedTemplate.id === template.id }"
                :properties="template.properties"
                :isSelected="selectedTemplate.id === template.id"
            />
          </div>
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
                :is="'properties-prop' + key.at(0).toUpperCase() + key.slice(1)"
                :key="key"
            />
          </div>
        </div>
      </div>

      <!-- Preview Area -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow-sm rounded-lg p-6">
          <component
              v-if="selectedTemplate && selectedTemplate.name"
              :is="'templates-' + (selectedTemplate.name).toLowerCase()"
              :properties="properties"
              :blurStart="blurStart"
              :blurEnd="blurEnd"
              :canvas="properties.canvas"
          />
        </div>
        <Export :properties="properties"/>
      </div>

    </div>
  </div>
</template>
