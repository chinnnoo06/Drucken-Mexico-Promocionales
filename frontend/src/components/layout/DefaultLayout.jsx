import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../ui/Header"
import { Footer } from "../ui/Footer"

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
