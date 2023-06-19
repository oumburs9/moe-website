
import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Generic fetch function
export const fetchData = createAsyncThunk('fetch/fetchData',  (url) => {
//   const response = await api.get(url);
  const response =  axios.get(url);
  return response.data;
});

// Reusable slice method
export const createFetchSlice = (name) => {
  const initialState = {
    loading: false,
    data: [],
    error: '',
  };

  return createSlice({
    name,
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      });
      builder.addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
    },
  });
};
