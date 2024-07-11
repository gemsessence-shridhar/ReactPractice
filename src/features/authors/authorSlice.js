"use client"

import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authors: [],    
  },
  reducers: {
    addAuhors: (state, action) => {
      state.authors = action.payload.authors;
    }
  }
});

export const { addAuhors } = authorSlice.actions;
export default authorSlice.reducer;
