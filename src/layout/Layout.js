import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {children}
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
