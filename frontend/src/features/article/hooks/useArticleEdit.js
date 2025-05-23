import { useEffect, useState } from "react";
import { getArticleById, updatePost } from "@/features/article/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useEditArticle = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
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

  const mutation = useMutation({
    mutationFn: (payload) => updatePost(id, payload),
    onError: (error) => {
      setErrors(error.response.data.errors);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["articles_dashboard"]);
      navigate("/dashboard/article", {
        state: { type: "success", message: "Berhasil diperbarui" },
      });
    },
  });

  const handleSubmit = (status) => {
    mutation.mutate({ ...formData, status });
  };

  return {
    loading,
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useEditArticle;
