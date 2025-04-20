import axiosInstance from "./AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTrendingData = createAsyncThunk(
  "getTrendingData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/trending/all/week");
      //   console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const configurationData = createAsyncThunk(
  "configurationData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/configuration");
      //   console.log(response.data.images.secure_base_url + "orignal");
      return response.data.images.secure_base_url + "original";
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// now playing data

export const nowPlayingData = createAsyncThunk(
  "nowPlayingData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/movie/now_playing");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// top rated movies
export const topRatedData = createAsyncThunk(
  "topRatedData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/movie/top_rated");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// tv shows
export const popularTvShowData = createAsyncThunk(
  "popularTvShowData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/tv/popular");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//

export const onTheAirShowData = createAsyncThunk(
  "onTheAirShowData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/tv/on_the_air");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// get Explore page data

const initialState = {
  bannerData: [],
  imageURL: "",
  nowPlayingData: [],
  topRatedData: [],
  popularTvShowData: [],
  onTheAirShowData: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingData.fulfilled, (state, action) => {
        state.loading = false;
        state.bannerData = action.payload;
      })
      .addCase(getTrendingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // configuration  data
    builder
      .addCase(configurationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(configurationData.fulfilled, (state, action) => {
        state.loading = false;
        state.imageURL = action.payload;
      })
      .addCase(configurationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // now playing
    builder
      .addCase(nowPlayingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(nowPlayingData.fulfilled, (state, action) => {
        state.loading = false;
        state.nowPlayingData = action.payload;
      })
      .addCase(nowPlayingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // top rated
    builder
      .addCase(topRatedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topRatedData.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedData = action.payload;
      })
      .addCase(topRatedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // popular tv shows

    builder
      .addCase(popularTvShowData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(popularTvShowData.fulfilled, (state, action) => {
        state.loading = false;
        state.popularTvShowData = action.payload;
      })
      .addCase(popularTvShowData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //onTheAirShowData

    builder
      .addCase(onTheAirShowData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(onTheAirShowData.fulfilled, (state, action) => {
        state.loading = false;
        state.onTheAirShowData = action.payload;
      })
      .addCase(onTheAirShowData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //Explore data
  },
});

export default moviesSlice.reducer;
