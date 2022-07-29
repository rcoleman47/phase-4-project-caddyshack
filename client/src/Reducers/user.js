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
    addCoursePlayed: (state, action) => {
      if(state.value.courses_played.includes(action.payload.course)){
        return state.value.courses_played
      } else return [...state.value.courses_played, action.payload.course]
    },
  }
});



export const { login, logout, addCoursePlayed } = slice.actions;
export default slice.reducer;