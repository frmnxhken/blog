import React, { useState } from "react";
import {
  ArticleItem,
  ArticleSearchInput,
  ArticleTab,
} from "@/features/article/ui";
import { useArticleDashboard } from "@/features/article/hooks";
import Loading from "@/shared/ui/Loading";

const ArticleManagePage = () => {
  const [status, setStatus] = useState("publish");
  const [keyword, setKeyword] = useState("");
  const { articles, loading } = useArticleDashboard(status, keyword);

  return (
    <div>
      <ArticleSearchInput onSearch={(val) => setKeyword(val)} />
      <ArticleTab onChangeStatus={(val) => setStatus(val)} active={status} />
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
