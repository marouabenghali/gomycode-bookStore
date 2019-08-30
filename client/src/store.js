import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk'
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
