import React from "react";
import { ArticleForm } from "@/features/article/ui";
import { useArticleWrite } from "@/features/article/hooks";

const ArticleWritePage = () => {
  const { formData, errors, handleChange, handleSubmit } = useArticleWrite();

  return (
    <ArticleForm
      loading={false}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ArticleWritePage;
