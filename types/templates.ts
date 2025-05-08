/**
 * Get list templates
 * @param shopDomain - The shop domain
 */
export interface GetListTemplatesArgs {
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The limit of the templates
   * Default: 5
   */
  limit?: number;

  /**
   * The page number
   * Default: 1
   */
  page?: number;

  /**
   * The sort order
   * Default: "updatedAt__desc"
   */
  sort?: "updatedAt__asc" | "updatedAt__desc" | "name__asc" | "name__desc";

  /**
   * The filter name
   * Format: string__has__{value}
   */
  filter?: string;

  /**
   * The prompt requested by the user
   */
  prompt: string;
}

/**
 * Get template editor
 * @param _id - The id of the template
 * @param shopDomain - The shop domain
 */
export interface GetTemplateArgs {
  /**
   * The id of the template
   */
  _id: string;
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The prompt requested by the user
   */
  prompt: string;
}

/**
 * Create a new template
 * @param shopDomain - The shop domain
 * @param name - The name of the template
 * @param dimension - The dimension of the template
 * @param layers - The layers of the template
 */
export interface CreateTemplateArgs {
  /**
   * The id of the template
   */
  _id?: string;
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The name of the template
   */
  name: string;
  /**
   * The dimension of the template
   */
  dimension: {
    width: number;
    height: number;
    measurementUnit: "px" | "cm" | "inch" | "mm";
    resolution: number;
  };
  /**
   * The layers of the template
   */
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
  /**
   * The prompt requested by the user
   */
  prompt: string;
}
