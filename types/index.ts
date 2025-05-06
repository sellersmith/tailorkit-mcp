export * from './templates.js';
export * from './layers.js';

// Template related types
export interface GetListTemplatesArgs {
  shopDomain: string;
  filter?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface GetTemplateArgs {
  _id: string;
  shopDomain: string;
}

export interface CreateTemplateArgs {
  _id?: string;
  shopDomain: string;
  name: string;
  dimension: {
    width: number;
    height: number;
    measurementUnit: string;
    resolution: number;
  };
  layers?: Array<{
    _id: string;
    label: string;
    type: 'group' | 'text' | 'image' | 'imageless' | 'multi-layout';
    locked: boolean;
    visible: boolean;
    left: number;
    top: number;
    rotate: number;
    width: number;
    height: number;
    children?: string[];
    image?: {
      src: string;
      width: number;
      height: number;
    };
    settings?: Record<string, any>;
  }>;
}

// Layer related types
export interface GetListLayersOfTemplateArgs {
  _id: string;
  shopDomain: string;
}
