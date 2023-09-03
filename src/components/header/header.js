import "./header.scss";
import React, { useState, useEffect } from "react";
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
import store from "../data/store";
import { useStoreActions, useStoreState } from "easy-peasy";
import { fetchUserData } from "../supabase";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook do przekierowywania użytkownika
  const clearUser = useStoreActions((actions) => actions.user.clearUser); // Akcja do czyszczenia danych użytkownika
  const userData = useStoreState((state) => state.user.user);
  const { username, avatar } = userData || {};
  const discordId = userData?.discordUserId; 


  console.log(discordId)
  const fetchUserbaseData = async () => {
    console.log("Przed pobraniem danych, discordId:", discordId);
    try {
      const userbaseData = await fetchUserData(discordId);

      // Dalej możesz korzystać z userbaseData w kodzie...
      console.log("Dane użytkownika z bazy danych:", userbaseData);
    } catch (error) {
      console.error("Błąd podczas pobierania danych użytkownika:", error);
    }
  };

  useEffect(() => {
    if (discordId) {
      console.log("Komponent Header zamontowany, discordId:", discordId);
      fetchUserbaseData(discordId);
    }
  }, [discordId]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogoClick = () => {
    // Po kliknięciu w logo odśwież stronę
    window.location.reload();
  };

  const handleLogout = () => {
    // Wywołaj akcję clearUser, aby usunąć dane użytkownika
    clearUser();
    localStorage.removeItem("userData");

    // Przekieruj użytkownika do ścieżki "/"
    navigate("/");
  };

  

  return (
    <div className="Header">
      <div className="logo" onClick={handleLogoClick}>
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
            <span>{username}</span>
          </div>
          <div className="user-avatar">
          {avatar && <img src={avatar} alt="Avatar" />}
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

                <li>
                  <div className="li-img">
                    <img src={exit} alt="Icon" />{" "}
                  </div>
                  <div className="li-text" onClick={handleLogout}>
                    Logout{" "}
                  </div>
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
