import { CommonToolArgs } from "./common.js";
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
export interface GetUserPreferencesArgs extends CommonToolArgs {}

/**
 * UpdateUserPreferencesArgs request params
 */
export interface UpdateUserPreferencesArgs extends CommonToolArgs {
  /**
   * The config
   */
  config: Record<string, any>;
}
