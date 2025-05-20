import React, { useEffect, useState } from "react";
import ArticleItem from "./ui/ArticleItem";
import { LIST_ARTICLE } from "@/shared/data";
import Tab from "./ui/Tab";
import SearchInput from "./ui/SearchInput";
import { getArticles } from "@/features/article/api";

const ArticleManagePage = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const response = await getArticles();
    setArticles(response.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <SearchInput />
      <Tab />
      <div className="grid grid-cols-1 gap-y-2 mt-6">
        {articles?.map((article, index) => (
          <ArticleItem key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleManagePage;
