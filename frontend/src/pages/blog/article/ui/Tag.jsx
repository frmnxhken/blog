import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/Button";
import { getTag } from "@/shared/api/Tag";

const Tag = () => {
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
  return (
    <div className="flex flex-wrap gap-2 mt-12">
      {data?.map((tag, index) => (
        <Button variant="secondary">#{tag.name}</Button>
      ))}
    </div>
  );
};

export default Tag;
