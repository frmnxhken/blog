import React from "react";

import Hero from "./ui/Hero";
import Header from "./ui/Header";
import { useArticleUserRecent } from "@/features/article/hooks";
import { ArticlePost } from "@/features/article/ui";

const HomePage = () => {
  const { data, isLoading } = useArticleUserRecent();

  return (
    <>
      <Hero />
      <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
        <div className="container max-w-[1200px] mx-auto px-4 py-24">
          <Header />
          <ArticlePost isLoading={isLoading} data={data} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
