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
};

export { API_ENDPOINTS };
