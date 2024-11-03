import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("adminAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default ProtectedRoute;