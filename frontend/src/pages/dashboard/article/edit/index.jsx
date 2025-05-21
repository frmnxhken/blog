import React from "react";
import { useParams } from "react-router-dom";
import { useEditArticle } from "@/features/article/edit/model";
import { ArticleForm } from "@/features/article/ui";

const EditArticlePage = () => {
  const { id } = useParams();
  const { loading, formData, handleChange, handleSubmit } = useEditArticle(id);

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
