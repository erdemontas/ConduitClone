import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import auth from "./auth";
import article from "./article";

const rootReducer = combineReducers({
  auth,
  article,
  routing: routerReducer,
});

export default rootReducer;
