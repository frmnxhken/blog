import api from "@/shared/api/Api";

export const updateProfile = async (payload) => {
  const reponse = await api.put("/profile", payload);
  return reponse.data;
};
