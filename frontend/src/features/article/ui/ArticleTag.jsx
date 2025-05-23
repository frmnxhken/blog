import React from "react";
import Button from "@/shared/ui/Button";
import { useArticleTag } from "../hooks";

const ArticleTag = ({ onChangeTag, active }) => {
  const { data } = useArticleTag();
  return (
    <div className="flex flex-nowrap gap-2 overflow-auto mt-12">
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

export default ArticleTag;
