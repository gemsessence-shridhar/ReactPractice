"use client"

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '@/features/library/bookSlice';

export default configureStore({
  reducer: {
    library: bookReducer
  }
});
