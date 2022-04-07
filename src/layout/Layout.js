import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="App">
      <div className="container">
        {children}
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
