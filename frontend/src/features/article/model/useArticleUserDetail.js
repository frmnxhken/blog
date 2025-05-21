import { useEffect, useState } from "react";
import { getArticleDetail } from "@/shared/api/Article";

const useArticleUserDetail = (slug) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticleDetail = async () => {
      const response = await getArticleDetail(slug);
      if (!response.error) {
        setData(response.data);
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, []);

  return { data, loading };
};

export default useArticleUserDetail;
