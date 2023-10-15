import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import ClientLayout from "../layout/ClientLayout";
import About from "../pages/client/About";
import Calculator from "../pages/client/Calculator";
import Project from "../pages/client/Project";
import ProjectDetails from "../pages/client/ProjectDetails";
import StayInTouch from "../pages/client/StayInTouch";
import Login from "../pages/common/Login";
import SignUp from "../pages/common/SignUp";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "./ProtectedRote";
import PageNotFound from "../pages/common/PageNotFound";
import OTP from "../pages/common/OTP";
import Password from "../pages/common/Password";

export default function MainRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Router>
      <Routes>
        {/* client routes */}
        <Route
          path="/"
          element={
            <ClientLayout>
              <Home />
            </ClientLayout>
          }
        />
        <Route
          path="/about"
          element={
            <ClientLayout>
              <About />
            </ClientLayout>
          }
        />
        <Route
          path="/calculator"
          element={
            <ClientLayout>
              <Calculator />
            </ClientLayout>
          }
        />
        <Route
          path="/Projects"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ClientLayout>
                <Project />
              </ClientLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Project/:id"
          element={
            <ClientLayout>
              <ProjectDetails />
            </ClientLayout>
          }
        />
        <Route
          path="/stay-in-touch"
          element={
            <ClientLayout>
              <StayInTouch />
            </ClientLayout>
          }
        />

        {/* common route */}
        <Route
          path="/login"
          element={
            <ClientLayout>
              <Login />
            </ClientLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <ClientLayout>
              <SignUp />
            </ClientLayout>
          }
        />
        <Route
          path="/otp"
          element={
            <ClientLayout>
              <OTP />
            </ClientLayout>
          }
        />
        <Route
          path="/password"
          element={
            <ClientLayout>
              <Password />
            </ClientLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true}>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
