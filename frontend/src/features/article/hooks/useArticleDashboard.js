import { getArticles } from "@/features/article/api";
import { useQuery } from "@tanstack/react-query";

const useArticleDashboard = (status, keyword) => {
  return useQuery({
    queryKey: ["articles_dashboard", status, keyword],
    queryFn: async () => {
      const response = await getArticles(status, keyword);
      if (response.error) {
        throw new Error(response.message);
      }
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export default useArticleDashboard;
