import api from "./Api";
import { ErrorHandler } from "../lib/ErrorHandler";

export const getTag = async () => {
  try {
    const response = await api.get("/tag");
    return response.data;
  } catch (error) {
    return ErrorHandler(error);
  }
};
