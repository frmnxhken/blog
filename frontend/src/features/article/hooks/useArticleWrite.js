import { useState } from "react";
import { createPost } from "@/features/article/api";

const useArticleWrite = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    thumbnail: null,
    content: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (status) => {
    const payload = {
      ...formData,
      status,
    };

    try {
      const response = await createPost(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useArticleWrite;
