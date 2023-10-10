import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  redirect = "/login",
  redirectAdmin = "*",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (!adminRoute) {
    return <Navigate to={redirectAdmin} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;