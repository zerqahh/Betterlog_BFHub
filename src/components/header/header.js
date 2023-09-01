import "./header.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import bell from "./bell-white.png";
import mag from "./magwhite.png";
import ammo from "./ammowhite.png";
import versus from "./versuswhite.png";
import setting from "./setting.png";
import user from "./user.png";
import exit from "./exit.png";
import chat from "./chat.png";

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
        <span>BETTERL</span>
        <img src={mag} alt="Icon" />
        <span>G</span>
      </div>
      <div className="header-mid">
        {" "}
        <img src={ammo} alt="Icon" />
        <img src={versus} alt="Icon" />
        <img src={mag} alt="Icon" />
        <img src={chat} alt="Icon" />
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
                <li>
                  <div className="li-img">
                    {" "}
                    <img src={user} alt="Icon" />{" "}
                  </div>
                  <div className="li-text">Profile</div>
                </li>
                <li>
                  <div className="li-img">
                    {" "}
                    <img src={setting} alt="Icon" />
                  </div>
                  <div className="li-text">Setting</div>
                </li>

                <li onClick={handleLogout}>
                  <div className="li-img">
                    <img src={exit} alt="Icon" />{" "}
                  </div>
                  <div className="li-text">Logout </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
