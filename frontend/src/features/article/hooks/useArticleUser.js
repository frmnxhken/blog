import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticleByTag, getArticles } from "@/shared/api/Article";

const useArticleUser = () => {
  const [tag, setTag] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const fetchFn = async () => {
    return tag === "all"
      ? await getArticles(page)
      : await getArticleByTag(tag, page);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["articles", tag, page],
    queryFn: fetchFn,
    keepPreviousData: true,
  });

  return {
    data: data?.data || [],
    pagination: data?.meta || {},
    tag,
    setTag: (newTag) => {
      setTag(newTag);
      setPage(1);
    },
    page,
    setPage,
    isLoading,
  };
};

export default useArticleUser;
