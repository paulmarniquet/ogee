export interface Template {
  id: string
  name: string
  properties: Properties
}

export interface Category {
  id: string
  name: string
  icon?: string
  templates: Template[]
}

export interface Properties {
  logo?: {
    url?: string
    width?: number
    height?: number
  }
  image?: {
    url?: string
    width?: number
    height?: number
  }
  grid?: {
    blur?: number
    columns?: number
    rows?: number
    gap?: number
  }
  canvas?: {
    width?: number
    height?: number
    background?: string
  }
  [key: string]: any // Pour les propriétés dynamiques supplémentaires
}

// Pour le stockage
export interface StorageOptions {
  serializer: {
    read: (value: any) => any
    write: (value: any) => string
  }
}

// Pour les items du menu contextuel
export interface ContextMenuItem {
  icon?: string
  label: string
  children?: ContextMenuItem[]
  onSelect?: () => void
}

// Pour les événements émis
export interface TemplateEvents {
  (e: 'select-template', template: Template): void
  (e: 'select-category', category: Category): void
}
