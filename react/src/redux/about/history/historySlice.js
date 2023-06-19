import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  histories: [],
  error: '',
};

export const fetchHistories = createAsyncThunk('histories/fetchHistories', async () => {
  const response = await axios
    .get('https://648225a929fa1c5c5032a482.mockapi.io/api/v1/history');
  return response.data;
});


const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHistories.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchHistories.fulfilled, (state, action) => {
      state.loading = false;
      state.histories = action.payload;
      state.error = '';
    });
    builder.addCase(fetchHistories.rejected, (state, action) => {
      state.loading = false;
      state.histories = [];
      state.error = action.error.message;
    });
  },
});

export default historySlice.reducer;

// import { fetchData, createFetchSlice } from "../../fetch-slice";


// export const fetchHistories = fetchData('https://648225a929fa1c5c5032a482.mockapi.io/api/v1/history');

// const historySlice = createFetchSlice('history');

// export default historySlice.reducer;