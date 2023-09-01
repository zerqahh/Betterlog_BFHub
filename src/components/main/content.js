import "./content.scss";
import Sidebar from "./sidebar/sidebar";
import versus from "../header/magwhite.png";
import vu from "../header/VU.png";
import bf3 from "../header/bf3.ico";
import home from "../header/home.png";
import youtube from "../header/youtube.png";
import help from "../header/help.png";

function Content() {
  return (
    <div className="content">
      <div className="content-container">
        <div className="menu">
          <div className="irregular-button-container">
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={home} className="jome-icon"></img>
              </div>
              <div className="menu-text">Home </div>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={bf3} className="vu-icon"></img>
              </div>
              <div className="menu-text">
                Play <br />
                Battlefield 3
                </div>
            </button>
            <button className="irregular-button">
              <div className="menu-icon">
                <img src={vu} className="vu-icon"></img>
              </div>
              <div className="menu-text">
                PLAY <br />
                Venice Unleashed
                </div>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={help} className="vu-icon"></img>
              </div>
              <div className="menu-text">Tricks & Tips </div>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={versus}></img>
              </div>
              <div className="menu-text">
                RANKED <br />
                COMPETETIVE
                </div>
            </button>
            <button className="irregular-button">
              <div className="menu-icon">
                <img src={youtube} className="vu-icon"></img>
              </div>
              <div className="menu-text"><>COMMUNITY</></div>
            </button>

            {/* Dodaj więcej nieregularnych przycisków */}
          </div>
        </div>
        <div className="content-screen"></div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Content;
