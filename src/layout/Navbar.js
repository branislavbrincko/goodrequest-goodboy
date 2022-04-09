import React from "react";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as InstragramIcon } from "../images/instagram.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <span>Nadácia Good Boy</span>
      <div>
        <a href="#">
          <FacebookIcon className="navbar-icon" width="24" height="24" />
        </a>
        <a href="#">
          <InstragramIcon className="navbar-icon" width="24" height="24" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
