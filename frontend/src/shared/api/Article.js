import { ErrorHandler } from "../utils/ErrorHandler";
import api from "./Api";

export const getArticles = async () => {
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
