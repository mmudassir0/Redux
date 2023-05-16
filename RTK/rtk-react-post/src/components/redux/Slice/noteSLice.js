import { createSlice } from "@reduxjs/toolkit";
//initial state
const initialState = {
  notes: [],
};
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    },
  },
});

export const { addNotes } = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
