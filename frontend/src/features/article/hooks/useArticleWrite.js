import { useState } from "react";
import { createPost } from "@/features/article/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useArticleWrite = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
    mutationFn: async (status) => {
      const payload = { ...formData, status };
      const response = await createPost(payload);

      if (response.error) {
        throw new Error(response.message);
      }
      return response.data;
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
    mutation.mutate(status);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    ...mutation,
  };
};

export default useArticleWrite;
