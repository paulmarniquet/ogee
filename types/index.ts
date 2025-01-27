export interface Template {
  id: string;
  preview: string;
  name: string;
  properties: Properties;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  templates: Template[];
}

export interface Properties {
  logo?: {
    url?: string;
    width?: number;
    height?: number;
  };
  image?: {
    url?: string;
    width?: number;
    height?: number;
  };
  title?: TextProperties;
  tag?: TextProperties;
  description?: TextProperties;
  gradient?: {
    colorStops: string[];
    angle?: number;
  };
  grid?: {
    pattern?: string;
    color?: string;
    opacity?: number;
    blur?: number;
  };
  noise?: number;
  canvas?: {
    width?: number;
    height?: number;
    background?: string;
  };
  [key: string]: any; // Pour d'autres propriétés dynamiques ou futures
}

export interface TextProperties {
  text: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number;
  color?: string;
}

export interface StorageOptions {
  serializer: {
    read: (value: any) => any;
    write: (value: any) => string;
  };
}

export interface ContextMenuItem {
  icon?: string;
  label: string;
  children?: ContextMenuItem[];
  onSelect?: () => void;
}

export interface TemplateEvents {
  (e: 'select-template', template: Template): void;
  (e: 'select-category', category: Category): void;
}
