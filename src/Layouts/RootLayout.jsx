import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-10">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
