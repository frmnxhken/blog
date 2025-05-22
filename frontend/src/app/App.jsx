import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout, MainLayout } from "./layout";
import { HomePage } from "@/pages/blog/home";
import { DashboardPage } from "@/pages/dashboard/home";
import EditProfilePage from "@/pages/dashboard/profile/EditProfilePage";
import { ChangePasswordPage } from "@/pages/dashboard/password";
import LoginPage from "@/pages/auth/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  ArticleManagePage,
  ArticleEditPage,
  ArticleWritePage,
} from "@/pages/dashboard/article";
import { ArticlePage } from "@/pages/blog/article";
import { ArticleDetailPage } from "@/pages/blog/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/:slug" element={<ArticleDetailPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="article" element={<ArticleManagePage />} />
            <Route path="article/:id/edit" element={<ArticleEditPage />} />
            <Route path="write" element={<ArticleWritePage />} />
            <Route path="profile" element={<EditProfilePage />} />
            <Route path="password" element={<ChangePasswordPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
