import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: {},
  rounds: {},
  newRound: {},
  newRoundCourse: {},
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
    },
    newRound: (state, action) => {
      state.newRound = action.payload
    },
    newRoundCourse: (state, action) => {
      state.newRoundCourse = action.payload
    },
    addRound: (state, action) => {
      state.rounds = [...state.rounds, action.payload]
    }
  }
});

const { setCourses, setRounds, newRound, newRoundCourse, addRound } = slice.actions;

export { setCourses, setRounds, newRound, newRoundCourse, addRound}
export default slice.reducer;