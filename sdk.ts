import { CreateTemplateArgs, GetListLayersOfTemplateArgs } from "./types.js";
import { GetListTemplatesArgs, GetTemplateArgs } from "./types.js";
import fetch, { RequestInit, Response } from "node-fetch";

export class TailorKitClient {
  private host: string;
  private botHeaders: { Authorization: string; "Content-Type": string };

  constructor(host: string, accessToken: string) {
    this.host = host;
    this.botHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
  }

  log(message: string) {
    // console.error(message);
  }

  /**
   * Authenticate fetch
   * @param url - The url to fetch
   * @param options - The options for the fetch
   * @returns The response from the fetch
   */
  async authenticateFetch(
    url: string,
    options: RequestInit
  ): Promise<Response> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers as Record<string, string>),
        ...this.botHeaders,
      },
    });

    return response;
  }

  /**
   * Get list templates
   * @param args - The arguments for the get list templates
   * @returns The list templates
   */
  async getListTemplates(args: GetListTemplatesArgs) {
    const response = await this.authenticateFetch(
      `${this.host}/api/mcp/get-list-templates`,
      {
        method: "POST",
        body: JSON.stringify(args),
      }
    );

    // this.log(`response: ${response}`);

    if (!response.ok) {
      throw new Error(`Failed to get list templates: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get detail template
   * @param args - The arguments for the get detail template
   * @returns The detail template
   */
  async getDetailTemplate(args: GetTemplateArgs) {
    const response = await this.authenticateFetch(
      `${this.host}/api/mcp/get-detail-template`,
      {
        method: "POST",
        body: JSON.stringify(args),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get detail template: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Create template
   * @param args - The arguments for the create template
   * @returns The created template
   */
  async createTemplate(args: CreateTemplateArgs) {
    const response = await this.authenticateFetch(
      `${this.host}/api/mcp/create-template`,
      {
        method: "POST",
        body: JSON.stringify({
          shopDomain: args.shopDomain,
          templateData: args,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create template: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get list layers of template
   * @param args - The arguments for the get list layers of template
   * @returns The list layers of template
   */
  async getListLayersOfTemplate(args: GetListLayersOfTemplateArgs) {
    const response = await this.authenticateFetch(
      `${this.host}/api/mcp/get-list-layers-of-template`,
      {
        method: "POST",
        body: JSON.stringify(args),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get list layers of template: ${response.statusText}`
      );
    }

    return response.json();
  }
}
