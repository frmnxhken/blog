import { Authentication, Deauthentication } from "@/features/auth/api";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (payload) => {
    try {
      const response = await Authentication(payload);
      const token = response.access_token;
      const userData = response.user;

      setUser(userData);
      setToken(token);

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);

      return { success: true };
    } catch (error) {
      return { success: false, errors: error.response.data.errors };
    }
  };

  const logout = async () => {
    try {
      await Deauthentication();
    } catch (error) {
      console.error("Logout error:", error);
    }

    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
