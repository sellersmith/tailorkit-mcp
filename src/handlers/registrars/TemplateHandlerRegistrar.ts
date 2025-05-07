import { ServiceHandlerRegistrar } from "./ServiceHandlerRegistrar.js";
import {
  getListTemplatesHandler,
  getDetailTemplateHandler,
  createTemplateHandler
} from "../template/index.js";
import { TAILOR_KIT_TOOL_NAMES } from "../../tools/constants.js";

/**
 * Template service handler registrar
 */
export class TemplateHandlerRegistrar extends ServiceHandlerRegistrar {
  registerHandlers(): void {
    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_LIST_TEMPLATES,
      (args: unknown) => getListTemplatesHandler(this.serviceManager, args)
    );

    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_DETAIL_TEMPLATE,
      (args: unknown) => getDetailTemplateHandler(this.serviceManager, args)
    );

    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.CREATE_TEMPLATE,
      (args: unknown) => createTemplateHandler(this.serviceManager, args)
    );
  }
}
