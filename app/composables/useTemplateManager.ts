import type {Category, Template} from "~~/types";

export function useTemplateManager(initialCategory: Category) {
    const storage = useTemplateStorage()

    const selectedCategory = ref(initialCategory as Category)
    const selectedTemplate = ref(selectedCategory.value.templates[0] as Template)
    const properties = ref({...selectedTemplate.value?.properties})
    const isResetting = ref(false)

    const templates = computed(() => selectedCategory.value.templates)

    const selectTemplate = (template: Template) => {
        selectedTemplate.value = template
        const storedProperties = storage.loadProperties(template)
        properties.value = reactive(storedProperties)
    }

    const selectCategory = (category: Category) => {
        selectedCategory.value = category
        selectTemplate(category.templates[0] as Template)
    }

    const resetTemplate = (template: Template) => {
        isResetting.value = true;
        import.meta.client ? storage.saveProperties(template, template.properties) : null;
        properties.value = {...template.properties};
        selectedTemplate.value = template;
        isResetting.value = false;
    };


    const resetAllTemplates = () => {
        for (const category of templateCategories) {
            for (const template of category.templates) {
                import.meta.client ? storage.saveProperties((template as any), template.properties) : null;
            }
        }
        properties.value = {...selectedTemplate.value.properties};
    };


    watch(
        () => properties.value,
        (newProperties) => {
            if (!isResetting.value) {
                storage.saveProperties(selectedTemplate.value, newProperties)
            }
        },
        {deep: true}
    )

    return {
        selectedCategory,
        selectedTemplate,
        properties,
        templates,
        selectTemplate,
        selectCategory,
        resetTemplate,
        resetAllTemplates,
    }
}
