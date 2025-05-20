import React, { useState } from "react";
import ArticleItem from "./ui/ArticleItem";
import Tab from "./ui/Tab";
import SearchInput from "./ui/SearchInput";
import { useArticles } from "@/features/article/hooks/useArticles";
import Loading from "@/shared/ui/Loading";

const ArticleManagePage = () => {
  const [status, setStatus] = useState("publish");
  const [keyword, setKeyword] = useState("");
  const { articles, loading } = useArticles(status, keyword);

  return (
    <div>
      <SearchInput onSearch={(val) => setKeyword(val)} />
      <Tab onChangeStatus={(val) => setStatus(val)} active={status} />
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
