import api from "./Api";

export const getTag = async () => {
  const response = await api.get("/tag");
  return response.data;
};
