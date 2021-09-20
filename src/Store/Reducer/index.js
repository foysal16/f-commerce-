import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./UserReducer/authReducer";
import storage from "redux-persist/lib/storage";
import userListReducer from "./UserReducer/UserListReducer";
import productReducer from "./ProductReducer/ProductReducer";

const persistConfig = {
  key: "fecomm",
  storage: storage,
};

export const persistedStore = persistReducer(persistConfig, authReducer);

const myMainReducer = combineReducers({
  authReducerStore: persistedStore,
  userData: userListReducer,

  // Product List Reducer
  productListToStore: productReducer,
});

export default myMainReducer;
