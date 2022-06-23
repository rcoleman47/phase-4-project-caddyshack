import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {value: false},
  reducers:{
    authorize: state => {
      state.value = true
    },
    unauthorize: state => {
      state.value = false
    },
  }
});

const { authorize, unauthorize } = slice.actions;

export { authorize, unauthorize };
export default slice.reducer;