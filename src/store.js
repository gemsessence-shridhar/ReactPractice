"use client"

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '@/features/library/bookSlice';
import authorReducer from '@/features/authors/authorSlice';

export default configureStore({
  reducer: {
    library: bookReducer,
    authors: authorReducer,
  }
});
