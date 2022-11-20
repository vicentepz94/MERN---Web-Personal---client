import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Users } from "../pages/admin";
import { AdminLayout } from "../layouts/AdminLayout";

const user = { email: "vicentepz94@gmail.com" };

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
      ) : (
        <>
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
        </>
      )}
    </Routes>
  );
}
