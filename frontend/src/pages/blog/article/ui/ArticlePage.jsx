import React, { useEffect, useState } from "react";
import Card from "@/shared/ui/Card";
import Tag from "./Tag";
import Loading from "@/shared/ui/Loading";
import Header from "./Header";
import { useArticleUser } from "@/features/article/model";

const ArticlePage = () => {
  const { data, tag, setTag, loading } = useArticleUser();

  return (
    <>
      <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
        <div className="container max-w-[1200px] mx-auto px-4 py-24">
          <Header />
          <Tag active={tag} onChangeTag={(val) => setTag(val)} />
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
