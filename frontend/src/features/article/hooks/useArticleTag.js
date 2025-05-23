import { getTag } from "@/shared/api/Tag";
import { useQuery } from "@tanstack/react-query";

const useArticleTag = () => {
  const { data } = useQuery({
    queryKey: ["tags"],
    queryFn: getTag,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data || null,
  };
};

export default useArticleTag;
