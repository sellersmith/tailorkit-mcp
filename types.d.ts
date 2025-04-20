/**
 * Get list templates
 * @param shopDomain - The shop domain
 */
interface GetListTemplatesArgs {
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
}

/**
 * Get template editor
 * @param _id - The id of the template
 * @param shopDomain - The shop domain
 */
interface GetTemplateArgs {
  /**
   * The id of the template
   */
  _id: string;
  /**
   * The shop domain
   */
  shopDomain: string;
}

interface CreateTemplateArgs {
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The name of the template
   */
  name: string;
  /**
   * The dimensions of the template
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
  layers: unknown[];
}

/**
 * Get list layers of template
 * @param _id - The id of the template
 * @param shopDomain - The shop domain
 * @param limit - The limit of the layers
 */
interface GetListLayersOfTemplateArgs {
  /**
   * The id of the template
   */
  _id: string;
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The limit of the layers
   * If not provided, all layers will be returned
   */
  limit?: number;
}

export {
  GetListTemplatesArgs,
  GetTemplateArgs,
  CreateTemplateArgs,
  GetListLayersOfTemplateArgs,
};
