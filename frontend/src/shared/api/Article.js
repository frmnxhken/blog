import { ErrorHandler } from "../lib/ErrorHandler";
import api from "./Api";

export const getArticles = async (tag) => {
  try {
    const response = await api.get("/article");
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getArticleRecent = async () => {
  try {
    const response = await api.get("/article/recent");
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getArticleDetail = async (slug) => {
  try {
    const response = await api.get("/article/" + slug);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getArticleByTag = async (tag) => {
  try {
    const response = await api.get("/tag/" + tag);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};
