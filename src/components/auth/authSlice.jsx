import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import{getUser,setUser}from "./authApi"

const initialState={
    status: 'idle',
    data:null,
    token:null
}

export const loginUser = createAsyncThunk(
    'auth/login',getUser);
export const signUp = createAsyncThunk(
    'auth/signUP',setUser);

const authSlice=createSlice({
  name:"authslice",
initialState,
reducers:{
  clear:(state)=>{state.data=null},
  setToken:(state,action)=>{state.token=action.payload}
},
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.status = 'loading';
          }).addCase(loginUser.rejected, (state) => {
            state.status = 'rejected';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'idle';
            state.data = action.payload; 
          })
          .addCase(signUp.pending, (state) => {
            state.status = 'loading';
          }).addCase(signUp.rejected, (state) => {
            state.status = 'rejected';
          })
          .addCase(signUp.fulfilled, (state, action) => {
            state.status = 'idle';
            state.data = action.payload; 
          })
}
})

export const { clear,setToken } = authSlice.actions
export default authSlice.reducer;