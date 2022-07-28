import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {value: false},
  reducers:{
    authorize: state => {
      state.value = !state.value
    }
  }
});



export const { authorize } = slice.actions;
export default slice.reducer;