import { ErrorHandler } from "../lib/ErrorHandler";
import api from "./Api";

export const getTag = async () => {
  try {
    const response = await api.get("/tag");
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};
