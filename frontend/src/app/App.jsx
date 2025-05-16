import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "@/pages/blog/home/HomePage";
import ArticlePage from "@/pages/blog/article/ArticlePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
