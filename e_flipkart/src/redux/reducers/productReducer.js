import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_RESET,
  GET_PRODUCT_DETAIL_SUCESS,
} from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCESS:
      return { products: action.payload };

    case GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsreducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAIL_SUCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRODUCT_DETAIL_RESET:
      return { product: {} };
    default:
      return state;
  }
};
