import api from "@/shared/api/Api";

export const getArticles = async (status, keyword, page) => {
  const response = await api.get(
    `/post?status=${status}&key=${keyword}&page=${page}`
  );
  return response.data;
};

export const getArticleById = async (id) => {
  const response = await api.get("/post/" + id);
  return response.data;
};

export const createPost = async (payload) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("thumbnail", payload.thumbnail);
  formData.append("content", JSON.stringify(payload.content));
  formData.append("tags", payload.tags);
  formData.append("status", payload.status);

  const response = await api.post("/post", formData);
  return response.data;
};

export const updatePost = async (id, payload) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("thumbnail", payload.thumbnail);
  formData.append("content", JSON.stringify(payload.content));
  formData.append("tags", payload.tags);
  formData.append("status", payload.status);
  formData.append("_method", "PUT");

  const response = await api.post("/post/" + id, formData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete("/post/" + id);
  return response.data;
};
