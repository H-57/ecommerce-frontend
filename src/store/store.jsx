import { configureStore } from '@reduxjs/toolkit';
import Counter from "./slices/counter"
export const store = configureStore({
  reducer: {
   count:Counter,
  },
});
