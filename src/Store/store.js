import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainReducer from './Reducers/mainReducer'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore (mainReducer, composeEnhancer)

export const persistor = persistStore(store);