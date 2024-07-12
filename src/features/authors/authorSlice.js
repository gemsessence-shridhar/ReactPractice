"use client"

import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authors: [],    
  },
  reducers: {
    addAuthors: (state, action) => {
      state.authors = action.payload.authors;
    },
    addAuthor: (state, action) => {
      state.authors = [...state.authors, action.payload.author]
    },
    deleteAuthor: (state, action) => {
      state.authors = state.authors.filter(author => author.id !== action.payload.authorId)
    }
  }
});

export const { addAuthors, addAuthor, deleteAuthor } = authorSlice.actions;
export default authorSlice.reducer;
