import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from './Reducers/auth';
import userReducer from './Reducers/user'
import golfReducer from './Reducers/golf';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    golf: golfReducer
  }
}, composedEnhancer);

export default store;