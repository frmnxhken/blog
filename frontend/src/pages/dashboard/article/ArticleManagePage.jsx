import React from "react";
import ArticleItem from "./ui/ArticleItem";
import { LIST_ARTICLE } from "@/shared/data";
import Tab from "./ui/Tab";
import SearchInput from "./ui/SearchInput";

const ArticleManagePage = () => {
  return (
    <div>
      <SearchInput />
      <Tab />
      <div className="grid grid-cols-1 gap-y-2 mt-6">
        {LIST_ARTICLE.map((article, index) => (
          <ArticleItem key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleManagePage;
