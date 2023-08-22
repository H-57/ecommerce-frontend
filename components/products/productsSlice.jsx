import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts,fetchProductsBYFilter,fetchSingleProduct } from './productsApi';

const initialState = {

  status: 'idle',
  products:null,
  productDetails:null,
};

export const fetchAllProducts = createAsyncThunk(
  'fetchAllProducts',fetchProducts);

export const fetchBYFilter = createAsyncThunk(
  'fetchAllProductsByFilters',fetchProductsBYFilter);
export const fetchProductDetails = createAsyncThunk(
  'ProductDetails',fetchSingleProduct);

export const productSlice = createSlice({
  name: 'product',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchAllProducts.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload; 
      })

      .addCase(fetchBYFilter.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchBYFilter.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYFilter.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload; 
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchProductDetails.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productDetails = action.payload; 
      })
  },
});





export default productSlice.reducer;
