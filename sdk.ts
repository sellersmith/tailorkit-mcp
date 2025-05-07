import { TailorKitBaseClient } from "./src/core/TailorKitBaseClient.js";
import { ServiceManager } from "./src/services/index.js";

/**
 * TailorKit Client SDK
 * Main entry point for interacting with TailorKit API
 */
export class TailorKitClient {
  private baseClient: TailorKitBaseClient;
  private serviceManager: ServiceManager;

  /**
   * Create a new TailorKit client
   * @param host - The API host URL
   * @param accessToken - The access token for authentication
   */
  constructor(host: string, accessToken: string) {
    this.baseClient = new TailorKitBaseClient(host, accessToken);
    this.serviceManager = ServiceManager.getInstance(this.baseClient);
  }

  /**
   * Get the base client (for internal use)
   * @returns The TailorKitBaseClient instance
   */
  getBaseClient(): TailorKitBaseClient {
    return this.baseClient;
  }

  /**
   * Get the template service for template operations
   * @returns The template service
   */
  get templates() {
    return this.serviceManager.templateService;
  }

  /**
   * Get the layer service for layer operations
   * @returns The layer service
   */
  get layers() {
    return this.serviceManager.layerService;
  }

  /**
   * Get the integration service for third-party integrations
   * @returns The integration service
   */
  get integrations() {
    return this.serviceManager.integrationService;
  }

  /**
   * Get the user preferences service for managing user settings
   * @returns The user preferences service
   */
  get userPreferences() {
    return this.serviceManager.userPreferencesService;
  }
}
