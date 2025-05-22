import React from "react";
import { useParams } from "react-router-dom";
import { useArticleEdit } from "@/features/article/hooks";
import { ArticleForm } from "@/features/article/ui";

const EditArticlePage = () => {
  const { id } = useParams();
  const { loading, formData, handleChange, handleSubmit } = useArticleEdit(id);

  return (
    <ArticleForm
      loading={loading}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditArticlePage;
