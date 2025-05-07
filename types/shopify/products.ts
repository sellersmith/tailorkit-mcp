interface GetListProductsArgs {
  shopDomain: string;
  first: number;
  after: string;
  sortKey: string;
}

interface GetDetailProductArgs {
  shopDomain: string;
  productId: string;
}

export { GetListProductsArgs, GetDetailProductArgs };
