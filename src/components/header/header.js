import "./header.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import bell from "./bell-white.png";
import mag from "./magwhite.png";
import ammo from "./ammowhite.png";
import versus from "./versuswhite.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/"); // Redirect to the landing page after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="Header">
      <div className="logo">
        <span>BETTERL</span><img src={mag} alt="Icon" /><span>G</span>
      </div>
      <div className="header-mid">
        {" "}
        <img src={ammo} alt="Icon" />
        <img src={versus} alt="Icon" />
        <img src={mag} alt="Icon" />
        <img src={bell} alt="Icon" />
      </div>
      <div className="user-panel">
        <div
          className={`panel-container ${isMenuOpen ? "open" : ""}`}
          onMouseEnter={handleMenuToggle}
          onMouseLeave={handleMenuToggle}
        >
          <div className="user-nickname">
            <span>PRESSPACEPLS</span>
          </div>
          <div className="user-avatar">
            <span>avatar</span>
          </div>
          {isMenuOpen && (
            <div className="hamburger-menu">
              <ul>
                <li>Profile</li>
                <li>Setting</li>
                <li onClick={handleLogout}>Logout</li>
                {/* ... dodaj więcej opcji menu ... */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
