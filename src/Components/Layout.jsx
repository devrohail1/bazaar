import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Head />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        {/* This will render the current route's component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
