import axios from "axios";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCESS,
} from "../constants/productConstant";
const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: GET_PRODUCTS_SUCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) =>{
  try{
    dispatch({type:GET_PRODUCT_DETAIL_REQUEST})
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAIL_SUCESS, payload: data });
  }catch(error){
    dispatch({ type: GET_PRODUCT_DETAIL_FAIL, payload: error.message });
  }
}
