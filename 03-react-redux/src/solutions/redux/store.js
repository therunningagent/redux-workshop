import { createStore, combineReducers } from "redux";
import itemReducer from "./itemReducer";
import categoryReducer from "./categoryReducer";

const reducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer,
});

const store = createStore(reducer);

export default store;
