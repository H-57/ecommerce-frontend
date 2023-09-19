import { configureStore } from '@reduxjs/toolkit';
import productReducers from "../components/products/productsSlice"
import authSlice from "../components/auth/authSlice"
import cartSlice from '@/components/cart/cartSlice';
export const store = configureStore({
  reducer: {
   product:productReducers,
   auth:authSlice,
   cart:cartSlice
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch