import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  generalEducations: [],
  error: '',
};

export const fetchGeneralEducations = createAsyncThunk('generalEducations/fetchGeneralEducations', async () => {
  const response = await axios
    .get('https://648225a929fa1c5c5032a482.mockapi.io/api/v1/education');
  return response.data;
});

const generalEducationSlice = createSlice({
  name: 'generalEducation',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchGeneralEducations.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGeneralEducations.fulfilled, (state, action) => {
      state.loading = false;
      state.generalEducations = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGeneralEducations.rejected, (state, action) => {
      state.loading = false;
      state.generalEducations = [];
      state.error = action.error.message;
    });
  },
});

export default generalEducationSlice.reducer;
