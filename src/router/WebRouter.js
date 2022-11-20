import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Blog, Contact, Courses, Post } from "../pages/web";
import { ClientLayout } from "../layouts/ClientLayout";

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
      <Route path="/courses" element={loadLayout(ClientLayout, Courses)} />
      <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
      <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
      {/* Para realizar el post dinamico luego de clickear en el post se le agrega el :path */}
      <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
    </Routes>
  );
}
