import React from "react";
import Footer from "./Footer";
import { Container, Divider } from "./Layout.styled";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      <Container>
        {children}
        <Divider />
        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
