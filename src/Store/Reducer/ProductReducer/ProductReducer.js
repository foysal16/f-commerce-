import { actionTypes } from "../../Action/actionTypes";

const initialState = {
  productList: [],
  product: {},
  currentProduct: null,
  productEdit: null,
  productDeleted: null,
  loading: true,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case actionTypes.PRODUCT_EDIT:
      return {
        ...state,
        productEdit: action.payload,
        loading: false,
      };
    case actionTypes.PRODUCT_DELETE:
      return {
        ...state,
        productDeleted: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
