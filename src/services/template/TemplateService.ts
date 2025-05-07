import { TailorKitBaseClient } from "../../core/TailorKitBaseClient.js";
import { CreateTemplateArgs, GetListTemplatesArgs, GetTemplateArgs } from "../../../types/index.js";
import { API_ENDPOINTS } from "../constants.js";

/**
 * Template data response interface
 */
export interface TemplateResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * Template service for handling template operations
 */
export class TemplateService {
  private client: TailorKitBaseClient;

  /**
   * Create a new TemplateService
   * @param client - The TailorKit base client
   */
  constructor(client: TailorKitBaseClient) {
    this.client = client;
  }

  /**
   * Get list templates
   * @param args - The arguments for the get list templates
   * @returns The list templates
   */
  async getListTemplates<T = any>(args: GetListTemplatesArgs): Promise<TemplateResponse<T>> {
    try {
      const data = await this.client.post<GetListTemplatesArgs, T>(API_ENDPOINTS.TEMPLATE.GET_LIST_TEMPLATES, args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Get detail template
   * @param args - The arguments for the get detail template
   * @returns The detail template
   */
  async getDetailTemplate<T = any>(args: GetTemplateArgs): Promise<TemplateResponse<T>> {
    try {
      const data = await this.client.post<GetTemplateArgs, T>(API_ENDPOINTS.TEMPLATE.GET_DETAIL_TEMPLATE, args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Create template
   * @param args - The arguments for the create template
   * @returns The created template
   */
  async createTemplate<T = any>(args: CreateTemplateArgs): Promise<TemplateResponse<T>> {
    try {
      const data = await this.client.post<any, T>(API_ENDPOINTS.TEMPLATE.CREATE_TEMPLATE, {
        shopDomain: args.shopDomain,
        templateData: args,
      });
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Update a template
   * @param args - The arguments for updating a template
   * @returns Promise with the updated template response
   */
  async updateTemplate<T>(args: any): Promise<TemplateResponse<T>> {
    try {
      // Implementation will be added when the API is available
      throw new Error("Template update not implemented yet");
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Delete a template
   * @param args - The arguments for deleting a template
   * @returns Promise with the deletion result response
   */
  async deleteTemplate<T>(args: GetTemplateArgs): Promise<TemplateResponse<T>> {
    try {
      // Implementation will be added when the API is available
      throw new Error("Template deletion not implemented yet");
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }
}
