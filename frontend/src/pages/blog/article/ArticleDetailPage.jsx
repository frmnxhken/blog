import React from "react";
import Header from "./ui/Header";
import { ARTICLE } from "@/shared/data";

const ArticleDetailPage = () => {
  return (
    <div className="container max-w-[1080px] mx-auto px-4 py-24">
      <Header />
      <div className="flex">
        <div className="w-[60%]">
          <div
            className="w-full prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: ARTICLE }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
