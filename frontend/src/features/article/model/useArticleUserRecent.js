import { getArticleRecent } from "@/shared/api/Article";
import { useEffect, useState } from "react";

const useArticleUserRecent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticleRecent = async () => {
      const response = await getArticleRecent();
      if (!response.error) {
        setData(response.data);
        setLoading(false);
      }
    };

    fetchArticleRecent();
  }, []);

  return { data, loading };
};

export default useArticleUserRecent;
