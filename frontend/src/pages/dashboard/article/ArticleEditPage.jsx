import React from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "@/features/article/ui";
import { useArticleEdit } from "@/features/article/hooks";

const EditArticlePage = () => {
  const { id } = useParams();
  const { loading, formData, errors, handleChange, handleSubmit } =
    useArticleEdit(id);

  return (
    <ArticleForm
      loading={loading}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditArticlePage;
