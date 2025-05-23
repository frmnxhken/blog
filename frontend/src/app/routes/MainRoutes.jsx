import React from "react";
import { Route } from "react-router-dom";

import { MainLayout } from "../layout";
import { HomePage } from "@/pages/blog/home";
import { ArticlePage } from "@/pages/blog/article";
import { ArticleDetailPage } from "@/pages/blog/detail";

const MainRoutes = () => {
  return (
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:slug" element={<ArticleDetailPage />} />
      </Route>
    </>
  );
};

export default MainRoutes;
