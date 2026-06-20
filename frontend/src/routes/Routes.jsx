import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Error } from "../pages/Error";
import { Privacy } from "../pages/Privacy";
import { Terms } from "../pages/Terms";
import { Order } from "../pages/Order";
import { Product } from "../pages/Product";
import { LoginAdmin } from "../pages/LoginAdmin";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { AdminLayout } from "../components/layout/AdminLayout";
import { AddProduct } from "../pages/AddProduct";
import { EditProduct } from "../pages/EditProduct";
import { Categories } from "../pages/Categories";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/catalogo/:category/:page" element={<Catalog />} />
        <Route path="/pedido" element={<Order />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
      </Route>

      <Route path="*" element={<Error />} />

      <Route path="/admin/login" element={<LoginAdmin />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="catalogo/:category/:page" element={<Catalog />} />
        <Route path="producto/:id" element={<Product />} />
        <Route path="agregar-producto" element={<AddProduct />} />
        <Route path="editar-producto" element={<EditProduct />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="privacidad" element={<Privacy />} />
        <Route path="terminos" element={<Terms />} />
      </Route>
    </Routes>
  );
};