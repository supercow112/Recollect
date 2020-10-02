import { createStore, applyMiddleware } from "redux";
import appReducer from "./redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

export default createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
