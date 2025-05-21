import api from "@/shared/api/Api";
import { ErrorHandler } from "@/shared/lib/ErrorHandler";

export const getArticles = async (status, keyword) => {
  try {
    const response = await api.get(
      "/post?status=" + status + "&key=" + keyword
    );
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await api.get("/post/" + id);
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
  formData.append("status", payload.status);

  try {
    const response = await api.post("/post", formData);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const updatePost = async (id, payload) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("thumbnail", payload.thumbnail);
  formData.append("content", JSON.stringify(payload.content));
  formData.append("tags", payload.tags);
  formData.append("status", payload.status);
  formData.append("_method", "PUT");

  try {
    const response = await api.post("/post/" + id, formData);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete("/post/" + id);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};
