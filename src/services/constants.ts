const API_BASE_URL = "/api/mcp/";

const API_ENDPOINTS = {
  TEMPLATE: {
    GET_LIST_TEMPLATES: `${API_BASE_URL}/get-list-templates`,
    GET_DETAIL_TEMPLATE: `${API_BASE_URL}/get-detail-template`,
    CREATE_TEMPLATE: `${API_BASE_URL}/create-template`,
  },
  LAYER: {
    GET_LIST_LAYERS_OF_TEMPLATE: `${API_BASE_URL}/get-list-layers-of-template`,
  },
  SHOPIFY: {
    PRODUCT: {
      GET_LIST_PRODUCTS: `${API_BASE_URL}/get-list-products`,
      GET_DETAIL_PRODUCT: `${API_BASE_URL}/get-detail-product`,
    },
  },
  USER_PREFERENCES: {
    GET_USER_PREFERENCES: `${API_BASE_URL}/get-user-preferences`,
  },
};

export { API_ENDPOINTS };
