import React, { useEffect } from "react";

import BannerHome from "../components/BannerHome";

import { useDispatch, useSelector } from "react-redux";
import HorizontalScroll from "../components/HorizontalScroll";
import {
  nowPlayingData,
  onTheAirShowData,
  popularTvShowData,
  topRatedData,
} from "../store/BannerDataSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const popularTvShow = useSelector(
    (state) => state.moviesData.popularTvShowData
  );
  const { loading } = useSelector((state) => state.moviesData);
  const trendingData = useSelector((state) => state.moviesData.bannerData);
  const nowPlaying = useSelector((state) => state.moviesData.nowPlayingData);
  const topRated = useSelector((state) => state.moviesData.topRatedData);
  const onTheAirShow = useSelector(
    (state) => state.moviesData.onTheAirShowData
  );

  useEffect(() => {
    dispatch(nowPlayingData());
    dispatch(topRatedData());
    dispatch(popularTvShowData());
    dispatch(onTheAirShowData());
  }, [dispatch]);

  return (
    <div>
      <BannerHome />
      {loading && <p className="text-center mt-54">Loading...</p>}
      <HorizontalScroll
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScroll
        data={nowPlaying}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={topRated}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={popularTvShow}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontalScroll
        data={onTheAirShow}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default HomePage;
