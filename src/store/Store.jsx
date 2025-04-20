import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./BannerDataSlice";
import exploreSlice from "./ExploreDataSlice";

const Store = configureStore({
  reducer: {
    moviesData: moviesSlice,
    explore: exploreSlice,
  },
});

export default Store;
