import React from "react";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as InstragramIcon } from "../images/instagram.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <span>Nadácia Good Boy</span>
      <div>
        <a href="#">
          <FacebookIcon class="navbar-icon" width="24" height="24" />
        </a>
        <a href="#">
          <InstragramIcon class="navbar-icon" width="24" height="24" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
