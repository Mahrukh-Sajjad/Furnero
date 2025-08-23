import React from "react";

import Nav from "./components/Nav";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <FooterBanner />

      <Footer />
    </div>
  );
};

export default Layout;
