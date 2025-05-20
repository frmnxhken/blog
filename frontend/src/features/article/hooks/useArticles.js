import { useEffect, useState } from "react";
import { getArticles } from "../api";

export const useArticles = (status, keyword) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = true;
    const fetchArticles = async () => {
      setLoading(true);
      const response = await getArticles(status, keyword);
      if (response.error) {
        setError(response.message);
      } else {
        setArticles(response.data);
      }
      setLoading(false);
    };

    fetchArticles();

    return () => {
      ignore = true;
    };
  }, [status, keyword]);

  return { articles, loading, error };
};
