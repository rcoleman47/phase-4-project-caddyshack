import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/user'
import golfReducer from './Reducers/golf';

const store = configureStore({
  reducer: {
    user: userReducer,
    golf: golfReducer
  }
});

export default store;