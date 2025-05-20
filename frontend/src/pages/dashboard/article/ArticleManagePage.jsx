import React from "react";
import ArticleItem from "./ui/ArticleItem";
import Tab from "./ui/Tab";
import SearchInput from "./ui/SearchInput";
import { useArticles } from "@/features/article/hooks/useArticles";
import Loading from "@/shared/ui/Loading";

const ArticleManagePage = () => {
  const { articles, loading } = useArticles();

  return (
    <div>
      <SearchInput />
      <Tab />
      <div className="grid grid-cols-1 gap-y-2 mt-6">
        {loading ? (
          <Loading />
        ) : (
          articles.map((article, index) => (
            <ArticleItem key={index} {...article} />
          ))
        )}
      </div>
    </div>
  );
};

export default ArticleManagePage;
