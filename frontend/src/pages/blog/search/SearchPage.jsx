import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useArticleUser } from "@/features/article/hooks";
import { ArticlePost } from "@/features/article/ui";
import Seo from "@/shared/ui/Meta";

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const keyword = query.get("key") || "";
  if (!keyword) return <Navigate to="/" />;

  const { data, pagination, isLoading, page, setPage } =
    useArticleUser(keyword);

  return (
    <>
      <Seo title={`Search for ${keyword}`} />
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <div>
          <h2 className="text-xl sm:text-4xl font-bold">
            Result for: {keyword}
          </h2>
        </div>
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

export default SearchPage;
