import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../../api/request";

const initialState = {
  leads: [],
  loading: false,
};
export const postPublicLead = createAsyncThunk(
  "leadSlice/postPublicLead",
  async (data) => {
    const res = await apiRequest({
      method: "post",
      url: `/api/lead`,
      data: data,
    });
    return res;
  }
);

export const leadSlice = createSlice({
  name: "lead",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postPublicLead.pending, (state) => {
        state.loading = true;
      })
      .addCase(postPublicLead.fulfilled, (state, action) => {
        state.leads.push(action.payload);
        state.loading = false;
      })
      .addCase(postPublicLead.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default leadSlice.reducer;
