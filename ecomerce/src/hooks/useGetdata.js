import { useEffect, useState } from "react";
export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setError(null);
        console.log("Dados carregados!");
      } catch (error) {
        console.log(error.message);
        setError("Houve um erro no carregamento dos dados!");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
