import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import{getCart,setCart}from "./cartApi"

const initialState={
    status: 'idle',
    products:[],
    
}

export const getCartAsync = createAsyncThunk(
    'cart/get',getCart);
export const setCartAsync = createAsyncThunk(
    'cart/set',setCart);


const cartSlice=createSlice({
  name:"cartSlice",
initialState,

    extraReducers: (builder) => {
        builder
          .addCase(getCartAsync.pending, (state) => {
            state.status = 'loading';
          }).addCase(getCartAsync.rejected, (state) => {
            state.status = 'rejected';
          })
          .addCase(getCartAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products = action.payload; 
          })
          .addCase(setCartAsync.pending, (state) => {
            state.status = 'loading';
          }).addCase(setCartAsync.rejected, (state) => {
            state.status = 'rejected';
          })
          .addCase(setCartAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products.push(action.payload); 
          })
         
}
})

export default cartSlice.reducer;