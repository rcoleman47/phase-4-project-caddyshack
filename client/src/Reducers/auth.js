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

const { authorize } = slice.actions;

export { authorize };
export default slice.reducer;