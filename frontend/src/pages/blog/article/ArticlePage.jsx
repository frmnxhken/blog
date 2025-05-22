import React from "react";
import Card from "@/shared/ui/Card";
import { ArticleTag } from "@/features/article/ui";
import Loading from "@/shared/ui/Loading";
import Header from "./ui/Header";
import { useArticleUser } from "@/features/article/hooks";

const ArticlePage = () => {
  const { data, tag, setTag, loading } = useArticleUser();

  return (
    <>
      <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
        <div className="container max-w-[1200px] mx-auto px-4 py-24">
          <Header />
          <ArticleTag active={tag} onChangeTag={(val) => setTag(val)} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-24">
            {loading ? (
              <Loading />
            ) : (
              data.map((article, index) => <Card key={index} {...article} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
