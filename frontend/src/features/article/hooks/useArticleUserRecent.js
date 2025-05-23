import { getArticleRecent } from "@/shared/api/Article";
import { useQuery } from "@tanstack/react-query";

const useArticleUserRecent = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles_recent"],
    queryFn: getArticleRecent,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data || [],
    isLoading,
  };
};

export default useArticleUserRecent;
