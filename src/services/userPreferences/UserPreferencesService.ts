import { TailorKitClient } from "../../../sdk.js";

/**
 * userPreferences data response interface
 */
export interface userPreferencesResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * userPreferences request params
 */
export interface GetuserPreferencesArgs {
  shopDomain: string;
}

export interface UpdateuserPreferencesArgs {
  shopDomain: string;
  config: Record<string, any>;
}

/**
 * userPreferences service for handling shop configuration operations
 */
export class UserPreferencesService {
  private client: TailorKitClient;

  /**
   * Create a new userPreferences Service
   * @param client - The TailorKit client instance
   */
  constructor(client: TailorKitClient) {
    this.client = client;
  }

  /**
   * Get shop configuration
   * @param args - The arguments for fetching shop config
   * @returns Promise with the shop config data response
   */
  async getuserPreferences<T>(args: GetuserPreferencesArgs): Promise<userPreferencesResponse<T>> {
    try {
      // Implementation will be added when the API is available
      throw new Error("Get shop config not implemented yet");
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Update shop configuration
   * @param args - The arguments for updating shop config
   * @returns Promise with the updated shop config response
   */
  async updateuserPreferences<T>(args: UpdateuserPreferencesArgs): Promise<userPreferencesResponse<T>> {
    try {
      // Implementation will be added when the API is available
      throw new Error("Shop config update not implemented yet");
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }
}
