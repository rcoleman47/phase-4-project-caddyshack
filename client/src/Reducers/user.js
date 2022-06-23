import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    username: '',
    email: ''
};

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

const { login, logout } = slice.actions;

export { login, logout };
export default slice.reducer;