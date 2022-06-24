import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from './Reducers/user'
import golfReducer from './Reducers/golf';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
  reducer: {
    user: userReducer,
    golf: golfReducer
  }
}, composedEnhancer);

export default store;