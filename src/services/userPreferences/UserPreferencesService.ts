import { TailorKitBaseClient } from "../../core/TailorKitBaseClient.js";
import { API_ENDPOINTS } from "../constants.js";

/**
 * UserPreferences data response interface
 */
export interface UserPreferencesResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * UserPreferences request params
 */
export interface GetUserPreferencesArgs {
  shopDomain: string;
  prompt: string;
}

export interface UpdateUserPreferencesArgs {
  shopDomain: string;
  prompt: string;
  config: Record<string, any>;
}

/**
 * Service for user preferences operations
 */
export class UserPreferencesService {
  private client: TailorKitBaseClient;

  /**
   * Create a new UserPreferencesService
   * @param client - The TailorKit base client
   */
  constructor(client: TailorKitBaseClient) {
    this.client = client;
  }

  /**
   * Get user preferences
   * @param args - The arguments for fetching user preferences
   * @returns Promise with the user preferences data response
   */
  async getUserPreferences<T>(args: GetUserPreferencesArgs): Promise<UserPreferencesResponse<T>> {
    try {
      const data = await this.client.post<GetUserPreferencesArgs, T>(API_ENDPOINTS.USER_PREFERENCES.GET_USER_PREFERENCES, args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Update user preferences
   * @param args - The arguments for updating user preferences
   * @returns Promise with the updated user preferences response
   */
  async updateUserPreferences<T>(args: UpdateUserPreferencesArgs): Promise<UserPreferencesResponse<T>> {
    try {
      // Implementation will be added when the API is available
      throw new Error("User preferences update not implemented yet");
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  // User preferences specific methods will be added here
}
