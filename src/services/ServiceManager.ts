import { TailorKitClient } from "../../sdk.js";
import { TemplateService, LayerService, IntegrationService, UserPreferencesService } from "./index.js";

/**
 * Service Manager class to manage all services
 * This class follows the Singleton pattern to ensure only one instance exists
 */
export class ServiceManager {
  private static instance: ServiceManager;
  private client: TailorKitClient;

  private _templateService: TemplateService;
  private _layerService: LayerService;
  private _integrationService: IntegrationService;
  private _userPreferencesService: UserPreferencesService;

  /**
   * Private constructor to prevent direct construction calls
   * @param client - The TailorKit client instance
   */
  private constructor(client: TailorKitClient) {
    this.client = client;
    this._templateService = new TemplateService(this.client);
    this._layerService = new LayerService(this.client);
    this._integrationService = new IntegrationService(this.client);
    this._userPreferencesService = new UserPreferencesService(this.client);
  }

  /**
   * Get the singleton instance of ServiceManager
   * @param client - The TailorKit client instance
   * @returns The ServiceManager instance
   */
  public static getInstance(client: TailorKitClient): ServiceManager {
    if (!ServiceManager.instance) {
      ServiceManager.instance = new ServiceManager(client);
    }
    return ServiceManager.instance;
  }

  /**
   * Get the template service
   * @returns The template service
   */
  public get templateService(): TemplateService {
    return this._templateService;
  }

  /**
   * Get the layer service
   * @returns The layer service
   */
  public get layerService(): LayerService {
    return this._layerService;
  }

  /**
   * Get the integration service
   * @returns The integration service
   */
  public get integrationService(): IntegrationService {
    return this._integrationService;
  }

  /**
   * Get the shop config service
   * @returns The shop config service
   */
  public get userPreferencesService(): UserPreferencesService {
    return this._userPreferencesService;
  }
}
