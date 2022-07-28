import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'user',
  initialState: {value: initialState},
  reducers:{
    login: (state, action) => {
      state.value = action.payload
    },
    logout: state => {
      state.value = initialState
    },
  }
});



export const { login, logout } = slice.actions;
export default slice.reducer;