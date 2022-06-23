import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: {},
  rounds: {}
}

const slice = createSlice({
  name: 'golf',
  initialState: {value: initialState},
  reducers:{
    setCourses: (state, action) => {
      state.courses = action.payload
    },
    setRounds: (state, action) => {
      state.rounds = action.payload
    }
  }
});

const { setCourses, setRounds } = slice.actions;

export { setCourses, setRounds } 
export default slice.reducer;