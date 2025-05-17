import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "@/pages/blog/home/HomePage";
import ArticlePage from "@/pages/blog/article/ArticlePage";
import ArticleDetailPage from "@/pages/blog/article/ArticleDetailPage";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "@/pages/dashboard/home/HomePage";
import ArticleManagePage from "@/pages/dashboard/article/ArticleManagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/detail" element={<ArticleDetailPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="article" element={<ArticleManagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
