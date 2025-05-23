import api from "./Api";

export const getArticles = async (page) => {
  const response = await api.get("/article?page=" + page);
  return response.data;
};

export const getArticleRecent = async () => {
  const response = await api.get("/article/recent");
  return response.data;
};

export const getArticleDetail = async (slug) => {
  const response = await api.get("/article/" + slug);
  return response.data;
};

export const getArticleByTag = async (tag, page) => {
  const response = await api.get(`/tag/${tag}?page=${page}`);
  return response.data;
};
