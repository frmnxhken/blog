import { getArticles } from "@/features/article/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useArticleDashboard = (status, keyword) => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["articles_dashboard", status, keyword, page],
    queryFn: async ({ queryKey }) => {
      const [, status, keyword, page] = queryKey;
      return await getArticles(status, keyword, page);
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data || [],
    pagination: data?.meta || {},
    isLoading,
    page,
    setPage,
  };
};

export default useArticleDashboard;
