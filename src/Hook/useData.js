import { useState, useEffect } from "react";

export const useData = (path) => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(null);
  const [Data, setData] = useState(null);
  const GetDataa = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/" + path;
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
      setisLoading(true);
    } catch (error) {
      setisError(error.message);
    }
  };
  useEffect(() => {
    GetDataa();
  }, []);
  return [Data, isLoading, isError];
};
