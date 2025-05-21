import React from "react";
import { useWriteArticle } from "@/features/article/write/model";
import { ArticleForm } from "@/features/article/ui";

const WriteArticlePage = () => {
  const { loading, formData, handleChange, handleSubmit } = useWriteArticle();

  return (
    <ArticleForm
      loading={loading}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default WriteArticlePage;
