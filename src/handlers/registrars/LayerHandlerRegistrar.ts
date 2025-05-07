import { ServiceHandlerRegistrar } from "./ServiceHandlerRegistrar.js";
import { getListLayersOfTemplateHandler } from "../layer/index.js";
import { TAILOR_KIT_TOOL_NAMES } from "../../tools/constants.js";

/**
 * Layer service handler registrar
 */
export class LayerHandlerRegistrar extends ServiceHandlerRegistrar {
  registerHandlers(): void {
    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_LIST_LAYERS_OF_TEMPLATE,
      (args: unknown) => getListLayersOfTemplateHandler(this.serviceManager, args)
    );
  }
}
