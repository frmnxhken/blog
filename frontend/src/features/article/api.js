import api from "@/shared/api/Api";
import { ErrorHandler } from "@/shared/utils/ErrorHandler";

export const getArticles = async () => {
  try {
    const response = await api.get("/post");
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const createPost = async (payload) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("thumbnail", payload.thumbnail);
  formData.append("content", JSON.stringify(payload.content));
  formData.append("tags", payload.tags);

  try {
    const response = await api.post("/post", formData);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};
