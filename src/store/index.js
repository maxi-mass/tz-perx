
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { goodReducer } from "./reducers/goodReducer";

const rootReducer = combineReducers({
  good: goodReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
