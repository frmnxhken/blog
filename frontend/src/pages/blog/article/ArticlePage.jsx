import React from "react";

import Header from "./ui/Header";
import { ArticleTag, ArticlePost } from "@/features/article/ui";
import { useArticleUser } from "@/features/article/hooks";
import Meta from "@/shared/ui/Meta";

const ArticlePage = () => {
  const { data, pagination, isLoading, tag, setTag, page, setPage } =
    useArticleUser();

  return (
    <>
      <Meta title="Articles" />
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <Header />
        <ArticleTag active={tag} onChangeTag={(val) => setTag(val)} />
        <ArticlePost
          isLoading={isLoading}
          data={data}
          pagination={pagination}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default ArticlePage;
