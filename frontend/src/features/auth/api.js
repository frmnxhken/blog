import api from "@/shared/api/Api";

export const Authentication = async (payload) => {
  const response = await api.post("/auth", payload);
  return response.data;
};

export const Deauthentication = async () => {
  const response = await api.post("/deauth");
  return response.data;
};
