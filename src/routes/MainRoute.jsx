import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import ClientLayout from "../layout/ClientLayout";
import About from "../pages/client/About";
import Calculator from "../pages/client/Calculator";
import Project from "../pages/client/Project";
import ProjectDetails from "../pages/client/ProjectDetails";
import StayInTouch from "../pages/client/StayInTouch";
import Login from "../pages/common/login";
import SignUp from "../pages/common/signup";
import Dashboard from "../pages/admin/dashboard";
import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "./ProtectedRote";
import PageNotFound from "../pages/common/PageNotFound";

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
            <ClientLayout>
              <Project />
            </ClientLayout>
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