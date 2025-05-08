import { CommonToolArgs } from "./common.js";

/**
 * Get list layers of template
 * @param _id - The id of the template
 * @param shopDomain - The shop domain
 */
export interface GetListLayersOfTemplateArgs extends CommonToolArgs {
  /**
   * The id of the template
   */
  _id: string;
}
