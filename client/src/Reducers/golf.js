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
    addRound: (state, action) => {
      state.rounds = [...state.rounds, action.payload]
    },
    addCourse: (state, action) => {
      state.courses = [...state.courses, action.payload]
    },
    deleteRound: (state, action) => {
      state.rounds = state.rounds.filter(round => round.id !== action.payload.id)
    },
    newRound: (state, action) => {
      state.newRound = action.payload
    },
    newRoundCourse: (state, action) => {
      state.newRoundCourse = action.payload
    },
    updateNewRoundHole: (state, action) => {
      state.newRound.breakdown = state.newRound.breakdown.map(hole => {
        if(hole.id === action.payload.id){
          return action.payload
        } else return hole
      })
    },
    updateRounds: (state, action) => {
      state.rounds = state.rounds.map(round => {
        if(round.id === action.payload.id){
          return action.payload
        } else return round
      })
    }
  }
});


export const { setCourses, addCourse, setRounds, newRound, newRoundCourse, addRound, deleteRound, updateNewRoundHole, updateRounds } = slice.actions;
export default slice.reducer;