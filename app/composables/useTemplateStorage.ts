import type { Properties, Template } from "~~/types";
import { useStorage } from '@vueuse/core';

export function useTemplateStorage() {
  const getStorageKey = (template: Template) => `template-${template.name}`

  const saveProperties = (template: Template, properties: Properties) => {
    if (!import.meta.client) return

    const { logo, image, ...filteredProperties } = properties
    const storage = useStorage(
      getStorageKey(template),
      filteredProperties,
      window.localStorage,
      {
        serializer: {
          read: (v) => (v ? JSON.parse(v) : null),
          write: (v) => JSON.stringify(v),
        },
      }
    )
    storage.value = filteredProperties
  }

  const loadProperties = (template: Template) => {
    if (!import.meta.client) return template.properties

    const storedProperties = useStorage(
      getStorageKey(template),
      null,
      window.localStorage,
      {
        serializer: {
          read: (v) => (v ? JSON.parse(v) : null),
          write: (v) => JSON.stringify(v),
        },
      }
    )

    if (!storedProperties.value) return template.properties

    const prioritizedProperties = {
      ...(template.properties.logo && { logo: template.properties.logo }),
      ...(template.properties.image && { image: template.properties.image }),
    }

    return {
      ...prioritizedProperties,
      ...storedProperties.value,
    }
  }

  return {
    saveProperties,
    loadProperties,
  }
}
