import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/Button";
import { getTag } from "@/shared/api/Tag";

const Tag = ({ onChangeTag, active }) => {
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
      <Button
        onClick={() => onChangeTag("all")}
        variant={active === "all" ? "primary" : "secondary"}
      >
        All
      </Button>
      {data?.map((tag, index) => (
        <Button
          onClick={() => onChangeTag(tag.name)}
          key={index}
          variant={active === tag.name ? "primary" : "secondary"}
        >
          #{tag.name}
        </Button>
      ))}
    </div>
  );
};

export default Tag;
