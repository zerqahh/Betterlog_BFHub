import "./content.scss";
import Sidebar from "./sidebar/sidebar";
import versus from "../header/magwhite.png";
import vu from "../header/VU.png";
import bf3 from "../header/bf3.ico";
import home from "../header/home.png";
import youtube from "../header/youtube.png";
import help from "../header/help.png";
import BF3 from "./sections/bf3/bf3";
import Community from "./sections/community/community";
import Competetive from "./sections/competetive/competetive";
import Home from "./sections/home/home";
import Tips from "./sections/tips/tips";
import VU from "./sections/vu/vu";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

function Content() {
  const [activeButton, setActiveButton] = useState("home");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="content">
      <div className="content-container">
        <div className="menu">
          <div className="irregular-button-container">
            <button
              className={`irregular-button ${
                activeButton === "home" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("home")}
            >
              <div className="menu-icon">
                <img src={home} className="home-icon" alt="Home"></img>
              </div>
              <div className="menu-text">Home</div>
            </button>
            <button
              className={`irregular-button ${
                activeButton === "bf3" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("bf3")}
            >
              <div className="menu-icon">
                <img
                  src={bf3}
                  className="vu-icon"
                  alt="Play Battlefield 3"
                ></img>
              </div>
              <div className="menu-text">
                Play <br />
                Battlefield 3
              </div>
            </button>
            <button
              className={`irregular-button ${
                activeButton === "vu" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("vu")}
            >
              <div className="menu-icon">
                <img
                  src={vu}
                  className="vu-icon"
                  alt="PLAY Venice Unleashed"
                ></img>
              </div>
              <div className="menu-text">
                PLAY <br />
                Venice Unleashed
              </div>
            </button>
            <button
              className={`irregular-button ${
                activeButton === "tips" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("tips")}
            >
              <div className="menu-icon">
                <img src={help} className="vu-icon" alt="Tricks & Tips"></img>
              </div>
              <div className="menu-text">Tricks & Tips</div>
            </button>
            <button
              className={`irregular-button ${
                activeButton === "competetive" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("competetive")}
            >
              <div className="menu-icon">
                <img src={versus} alt="RANKED Competetive"></img>
              </div>
              <div className="menu-text">
                RANKED <br />
                COMPETETIVE
              </div>
            </button>
            <button
              className={`irregular-button ${
                activeButton === "community" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("community")}
            >
              <div className="menu-icon">
                <img src={youtube} className="vu-icon" alt="COMMUNITY"></img>
              </div>
              <div className="menu-text">COMMUNITY</div>
            </button>
          </div>
        </div>
        <div className="content-screen">
          {activeButton === "bf3" && <BF3 />}
          {activeButton === "community" && <Community />}
          {activeButton === "competetive" && <Competetive />}
          {activeButton === "home" && <Home />}
          {activeButton === "tips" && <Tips />}
          {activeButton === "vu" && <VU />}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Content;
