import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./reducers/data";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  data: dataReducer,
});

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

export default store;
