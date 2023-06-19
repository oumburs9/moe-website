import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  higherEducations: [],
  error: '',
};

export const fetchHigherEducations = createAsyncThunk('higherEducations/fetchhigherEducations', async () => {
  const response = await axios
    .get('https://648225a929fa1c5c5032a482.mockapi.io/api/v1/education');
  return response.data;
});

const higherEducationSlice = createSlice({
  name: 'higherEducation',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHigherEducations.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchHigherEducations.fulfilled, (state, action) => {
      state.loading = false;
      state.higherEducations = action.payload;
      state.error = '';
    });
    builder.addCase(fetchHigherEducations.rejected, (state, action) => {
      state.loading = false;
      state.higherEducations = [];
      state.error = action.error.message;
    });
  },
});

export default higherEducationSlice.reducer;
