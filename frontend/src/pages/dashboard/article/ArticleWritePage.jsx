import React from "react";
import { useArticleWrite } from "@/features/article/hooks";
import { ArticleForm } from "@/features/article/ui";

const ArticleWritePage = () => {
  const { loading, formData, handleChange, handleSubmit } = useArticleWrite();

  return (
    <ArticleForm
      loading={loading}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ArticleWritePage;
