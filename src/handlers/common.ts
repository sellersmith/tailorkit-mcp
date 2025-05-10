import { CommonToolArgs } from "../../types/common.js";

const validateCommonToolArgs = (args: CommonToolArgs): void => {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }

  if (!args.prompt) {
    throw new Error("Invalid arguments: prompt is required");
  }

  if (!args.conversationId) {
    throw new Error("Invalid arguments: conversationId is required");
  }

  if (!args.conversationTitle) {
    throw new Error("Invalid arguments: conversationTitle is required");
  }
};

export { validateCommonToolArgs };
