import api from "@/shared/api/Api";
import { ErrorHandler } from "@/shared/lib/ErrorHandler";

export const Authentication = async (payload) => {
  try {
    const response = await api.post("/auth", payload);
    return response.data;
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const Deauthentication = async () => {
  try {
    const response = await api.post("/deauth");
    return response.data;
  } catch (error) {
    return ErrorHandler(error);
  }
};
