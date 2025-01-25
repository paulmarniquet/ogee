<script setup lang="ts">
import type { Category, Template } from "~~/types";
import { useTemplateManager } from '~/composables/useTemplateManager'
import { useBlurEffects } from '~/composables/useBlurEffects'

interface Props {
  initialCategory?: Category
}

const props = withDefaults(defineProps<Props>(), {
  initialCategory: templateCategories[0]
})

const {
  selectedCategory,
  selectedTemplate,
  properties,
  templates,
  selectTemplate,
  selectCategory,
  resetTemplate,
  resetAllTemplates,
} = useTemplateManager(props.initialCategory)

const { blurStart, blurEnd } = useBlurEffects(properties)

const contextMenuItems = computed(() => [
  {
    icon: 'i-lucide-monitor',
    label: 'Theme',
    children: [
      {
        label: 'Light',
        icon: 'i-lucide-sun',
      },
      {
        label: 'Dark',
        icon: 'i-lucide-moon',
      },
    ],
  },
  {
    label: 'Reset template',
    icon: 'i-lucide-squircle',
    onSelect: () => resetTemplate(selectedTemplate.value),
  },
  {
    label: 'Reset all templates',
    icon: 'i-lucide-square-x',
    onSelect: resetAllTemplates,
  },
])

onMounted(() => {
  selectTemplate(selectedTemplate.value)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Sélection de la catégorie et des templates -->
      <div class="lg:col-span-3 flex flex-col gap-2 overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
        <div class="flex flex-row gap-4">
          <div v-for="category in templateCategories" :key="category.id">
            <UButton
                @click="selectCategory(category)"
                class="px-4 py-2 flex bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <UIcon v-if="category.icon" :name="category.icon"/>
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
                :is="'preview-' + template.name.toLowerCase()"
                :class="{ 'border-2 rounded-xl border-gray-200': selectedTemplate.id === template.id }"
                :properties="template.properties"
                :isSelected="selectedTemplate.id === template.id"
            />
          </div>
        </div>
      </div>

      <!-- Panneau des propriétés -->
      <UContextMenu
          v-if="selectedTemplate"
          :items="[
          {
            icon: 'i-lucide-monitor',
            label: 'Theme',
            children: [
              {
                label: 'Light',
                icon: 'i-lucide-sun',
              },
              {
                label: 'Dark',
                icon: 'i-lucide-moon',
              },
            ],
          },
          {
            label: 'Reset template',
            icon: 'i-lucide-squircle',
            onSelect: () => resetPropertiesToDefault(selectedTemplate),
          },
          {
            label: 'Reset all templates',
            icon: 'i-lucide-square-x',
            onSelect: () => resetAllPropertiesToDefault(),
          },
        ]"
      >
        <div class="!bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold mb-2">Template Properties</h2>
          <h3 class="text-sm text-gray-500 mb-4">
            Customize the properties of the selected template
          </h3>
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
      </UContextMenu>

      <!-- Zone d'aperçu -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow-sm rounded-lg p-6">
          <component
              v-if="selectedTemplate && selectedTemplate.name"
              :is="'templates-' + selectedTemplate.name.toLowerCase()"
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
