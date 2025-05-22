import { useEffect, useState } from "react";
import { getTag } from "@/shared/api/Tag";

const useArticleTag = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await getTag();
      if (!response.error) {
        setData(response.data);
      }
    };

    fetchTags();
  }, []);

  return { data };
};

export default useArticleTag;
