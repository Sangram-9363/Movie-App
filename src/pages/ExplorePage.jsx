import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import {
  fetchExploreData,
  resetExplore,
  incrementPageNo,
} from "../store/ExploreDataSlice";

const ExplorePage = () => {
  const { explore } = useParams();

  const dispatch = useDispatch();

  // Get state from Redux store
  const { data, pageNo, totalPageNo, loading } = useSelector(
    (state) => state.explore
  );

  // Fetch data when pageNo changes
  useEffect(() => {
    dispatch(fetchExploreData({ category: explore, page: pageNo }));
  }, [pageNo]);

  // Reset data when explore category changes
  useEffect(() => {
    dispatch(resetExplore()); // Clear previous data
    dispatch(fetchExploreData({ category: explore, page: 1 })); // Fetch new data
  }, [explore]);

  // Infinite scrolling logic
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      if (pageNo < totalPageNo) {
        dispatch(incrementPageNo()); // Increment page number
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, totalPageNo]);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {explore} shows
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => (
            <Card
              key={index + " explore " + exploreData.id}
              data={exploreData}
              media_type={explore}
            />
          ))}
        </div>

        {/* Show loading indicator */}
        {loading && <p className="text-center mt-4">Loading...</p>}
      </div>
    </div>
  );
};

export default ExplorePage;
