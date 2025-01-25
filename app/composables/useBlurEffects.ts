import type { Properties } from "~~/types";

export function useBlurEffects(properties: Ref<Properties>) {
  const blurStart = computed(() => {
    const blurValue = properties.value.grid?.blur || 0
    return Math.min(blurValue * 8, 40)
  })

  const blurEnd = computed(() => {
    const blurValue = properties.value.grid?.blur || 0
    return Math.min(blurValue * 15, 100)
  })

  return {
    blurStart,
    blurEnd,
  }
}
