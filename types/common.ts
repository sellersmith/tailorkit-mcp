interface CommonToolArgs {
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The prompt requested by the user
   */
  prompt: string;
  /**
   * The short description of the conversation, it should be a short sentence, max 100 characters
   */
  conversationTitle: string;
}

export { CommonToolArgs };
