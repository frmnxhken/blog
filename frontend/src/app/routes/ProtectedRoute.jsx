import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, token, loading } = useAuth();
  if (!loading) {
    if (!user && !token) {
      return <Navigate to="/login" />;
    }
  }
  return <Outlet />;
};

export default ProtectedRoute;
