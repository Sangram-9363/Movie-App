import { useEffect, useState } from "react";
import axiosInstance from "../store/AxiosInstance"

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(endpoint);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchDetails;
