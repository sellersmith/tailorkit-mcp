import { CommonToolArgs } from "../common.js";

interface GetListProductsArgs extends CommonToolArgs {
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
}

interface GetDetailProductArgs extends CommonToolArgs {
  /**
   * The product id
   */
  productId: string;
}

export { GetListProductsArgs, GetDetailProductArgs };
