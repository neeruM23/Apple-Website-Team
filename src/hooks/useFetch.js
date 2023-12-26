import { useEffect, useState } from "react";

import { fetchData } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    callApi();
  }, [endpoint]);

  const callApi = async () => {
    const res = await fetchData(endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
