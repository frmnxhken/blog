import { useEffect, useState } from "react";
import { getArticleById, updatePost } from "../api";

const useEditArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    tags: null,
    thumbnail: null,
    content: null,
  });

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getArticleById(id);
        const { title, tags, thumbnail, content } = response.data;

        setArticle(response.data);
        setFormData({
          title,
          tags,
          thumbnail,
          content: JSON.parse(content),
        });
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (status) => {
    const payload = {
      ...formData,
      status,
    };

    try {
      const response = await updatePost(id, payload);
      console.log("Updated:", response);
    } catch (error) {
      console.error("Failed to update article:", error);
    }
  };

  return {
    loading,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useEditArticle;
