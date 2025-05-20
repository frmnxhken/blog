import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout, MainLayout } from "./layout";
import HomePage from "@/pages/blog/home/HomePage";
import ArticlePage from "@/pages/blog/article/ArticlePage";
import ArticleDetailPage from "@/pages/blog/article/ArticleDetailPage";
import DashboardPage from "@/pages/dashboard/home/HomePage";
import EditProfilePage from "@/pages/dashboard/profile/EditProfilePage";
import ChangePasswordPage from "@/pages/dashboard/password/ChangePasswordPage";
import LoginPage from "@/pages/auth/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  ArticleManagePage,
  EditArticlePage,
  WriteArticlePage,
} from "@/pages/dashboard/article";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/detail" element={<ArticleDetailPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="article" element={<ArticleManagePage />} />
            <Route path="article/:id/edit" element={<EditArticlePage />} />
            <Route path="write" element={<WriteArticlePage />} />
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
