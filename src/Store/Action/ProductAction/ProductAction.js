import axios from "axios";
import { actionTypes } from "../actionTypes";

const getProductList = (productList) => ({
  type: actionTypes.PRODUCT_LIST,
  payload: productList,
});

export const productLoad = (token) => {
  return async (dispatch, store) => {
    const { data } = await axios.get("http://localhost:8080/products", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(getProductList(data));
  };
};

const deletetProduct = (productDeleted) => ({
  type: actionTypes.PRODUCT_DELETE,
  payload: productDeleted,
});

export const productDeleted = (_id) => {
  return async (dispatch, getState) => {
    const { authReducerStore } = getState();
    const token = authReducerStore.token;
    const reponse = await axios.delete(
      `http://localhost:8080/products/${_id}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(deletetProduct(reponse));
    dispatch(productLoad());
  };
};
