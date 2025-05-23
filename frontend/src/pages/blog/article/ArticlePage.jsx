import React from "react";

import Card from "@/shared/ui/Card";
import Loading from "@/shared/ui/Loading";
import Pagination from "@/shared/ui/Pagination";

import Header from "./ui/Header";
import { ArticleTag } from "@/features/article/ui";
import { useArticleUser } from "@/features/article/hooks";

const ArticlePage = () => {
  const { data, pagination, isLoading, tag, setTag, page, setPage } =
    useArticleUser();

  return (
    <div className="bg-white w-full">
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <Header />
        <ArticleTag active={tag} onChangeTag={(val) => setTag(val)} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-24">
          {isLoading ? (
            <Loading />
          ) : (
            data.map((article, index) => <Card key={index} {...article} />)
          )}
        </div>
      </div>
      {pagination.last_page > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={pagination.last_page}
        />
      )}
    </div>
  );
};

export default ArticlePage;
