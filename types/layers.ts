/**
 * Get list layers of template
 * @param _id - The id of the template
 * @param shopDomain - The shop domain
 * @param limit - The limit of the layers, default returns all if not provided
 */
export interface GetListLayersOfTemplateArgs {
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
   */
  limit?: number;
}
