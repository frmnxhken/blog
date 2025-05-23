import { useState } from "react";
import { createPost } from "@/features/article/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useArticleWrite = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    thumbnail: null,
    content: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: (payload) => createPost(payload),
    onError: (error) => {
      setErrors(error.response.data.errors);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["articles_dashboard"]);
      setFormData({
        title: "",
        tags: [],
        thumbnail: null,
        content: null,
      });
      navigate("/dashboard/article", {
        state: { type: "success", message: "Berhasil ditambahkan" },
      });
    },
  });

  const handleSubmit = (status) => {
    mutation.mutate({ ...formData, status });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    ...mutation,
  };
};

export default useArticleWrite;
