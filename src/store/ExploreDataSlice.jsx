import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosInstance";
export const fetchExploreData = createAsyncThunk(
  "explore/fetchExploreData",
  async ({ category, page }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/discover/${category}`, {
        params: { page },
      });
      
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error while fetching data"
      );
    }
  }
);

const initialState = {
  data: [],
  pageNo: 1,
  totalPageNo: 0,
  loading: false,
  error: null,
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    resetExplore: (state) => {
      state.data = [];
      state.pageNo = 1;
      state.totalPageNo = 0;
      state.loading = false;
    },
    incrementPageNo: (state) => {
      state.pageNo += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExploreData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExploreData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.results];
        state.totalPageNo = action.payload.total_pages;
      })
      .addCase(fetchExploreData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetExplore, incrementPageNo } = exploreSlice.actions;
export default exploreSlice.reducer;
