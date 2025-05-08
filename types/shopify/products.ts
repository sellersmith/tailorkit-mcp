interface GetListProductsArgs {
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The first number of products to return
   */
  first: number;
  /**
   * The after cursor
   */
  after: string;
  /**
   * The sort key
   */
  sortKey: string;
  /**
   * The prompt requested by the user
   */
  prompt: string;
}

interface GetDetailProductArgs {
  /**
   * The shop domain
   */
  shopDomain: string;
  /**
   * The product id
   */
  productId: string;

  /**
   * The prompt requested by the user
   */
  prompt: string;
}

export { GetListProductsArgs, GetDetailProductArgs };
