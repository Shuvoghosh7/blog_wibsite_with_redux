import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});
