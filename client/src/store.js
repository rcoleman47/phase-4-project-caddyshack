import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/auth';
import userReducer from './Reducers/user'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer
  }
})

export default store;