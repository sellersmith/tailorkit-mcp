import { ServiceManager } from "../services/ServiceManager.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Type for validation function to validate arguments
 */
export type ValidationFn<T> = (args: T) => void;

/**
 * Type for service method function to call appropriate service
 */
export type ServiceMethodFn<T, R> = (
  serviceManager: ServiceManager,
  args: T
) => Promise<{ data: R | null; error: Error | null }>;

/**
 * Factory function to create standardized handlers
 * @param validateFn - Function to validate arguments
 * @param serviceMethodFn - Function that calls the appropriate service method
 * @returns A handler function
 */
export function createHandler<T, R>(
  validateFn: ValidationFn<T>,
  serviceMethodFn: ServiceMethodFn<T, R>
): (serviceManager: ServiceManager, args: unknown) => Promise<ToolHandlerResponse> {
  return async (
    serviceManager: ServiceManager,
    args: unknown
  ): Promise<ToolHandlerResponse> => {
    const typedArgs = args as T;

    // Validate arguments
    validateFn(typedArgs);

    // Call service method
    const response = await serviceMethodFn(serviceManager, typedArgs);

    // Handle error
    if (response.error) {
      throw response.error;
    }

    // Return formatted response
    return {
      success: true,
      data: response.data
    };
  };
}
