import api from "@/shared/api/Api";
import { ErrorHandler } from "@/shared/lib/ErrorHandler";

export const updatePassword = async (payload) => {
  try {
    const response = await api.put("/password", payload);
    return { success: true, data: response.data };
  } catch (error) {
    return ErrorHandler(error);
  }
};
