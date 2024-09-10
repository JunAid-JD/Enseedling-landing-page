import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <div className="headericon">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {!nav && (
        <nav>
          <ul>
            <li>
              <a href="/">Start with a business</a>
            </li>
            <li>
              <a href="/">Manage my Business</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            {/* <li>
              <a href="/">Get Started</a>
            </li> */}
            <button>Login</button>
          </ul>
        </nav>
      )}
      {nav && (
        <div className="responsiveNav">
          <div className="responsiveUl">
            <div className="responsiveLi">Start with a business</div>
            <div className="responsiveLi">Manage my Business</div>
            <div className="responsiveLi">About</div>
            <button>Login</button>
            <CancelIcon id="cancel" onClick={() => setNav(false)} />
          </div>
        </div>
      )}
      <MenuIcon id="menu" onClick={() => setNav(true)} />
    </header>
  );
};

export default Header;
