import { useEffect, useState } from "react";
import { getArticles } from "../api";

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const response = await getArticles();
      if (response.error) {
        setError(response.message);
      } else {
        setArticles(response);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};
