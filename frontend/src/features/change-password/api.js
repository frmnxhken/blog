import api from "@/shared/api/Api";

export const updatePassword = async (payload) => {
  const response = await api.put("/password", payload);
  return response.data;
};
