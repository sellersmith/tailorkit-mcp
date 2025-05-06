import fetch, { RequestInit, Response } from "node-fetch";

/**
 * Base client for TailorKit API requests
 * Handles authentication and common HTTP operations
 */
export class TailorKitBaseClient {
  private host: string;
  private botHeaders: { Authorization: string; "Content-Type": string };

  /**
   * Create a new TailorKitBaseClient
   * @param host - The API host URL
   * @param accessToken - The access token for authentication
   */
  constructor(host: string, accessToken: string) {
    this.host = host;
    this.botHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
  }

  /**
   * Log a message (for debugging)
   * @param message - The message to log
   */
  log(message: string) {
    // console.error(message);
  }

  /**
   * Get the host URL
   * @returns The host URL
   */
  getHost(): string {
    return this.host;
  }

  /**
   * Execute an authenticated API request
   * @param url - The URL to fetch
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
   * Make a POST request to the API
   * @param endpoint - The API endpoint
   * @param data - The data to send
   * @returns The response data
   */
  async post<T = any, R = any>(endpoint: string, data: T): Promise<R> {
    const response = await this.authenticateFetch(
      `${this.host}${endpoint}`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData: any = await response.json();
      throw new Error(`API Error: ${response.statusText} ${errorData.error?.message}`);
    }

    return response.json() as Promise<R>;
  }
}
