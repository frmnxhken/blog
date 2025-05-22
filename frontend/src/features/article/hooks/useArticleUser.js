import { useEffect, useState } from "react";
import { getArticleByTag, getArticles } from "@/shared/api/Article";

const useArticleUser = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("all");

  const fetchData = async () => {
    setLoading(true);
    const response =
      tag === "all" ? await getArticles() : await getArticleByTag(tag);
    if (!response.error) {
      setData(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [tag]);

  return {
    data,
    tag,
    setTag,
    loading,
  };
};

export default useArticleUser;
