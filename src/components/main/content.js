import "./content.scss";
import Sidebar from "./sidebar/sidebar";
import versus from "../header/magwhite.png";
import vu from "../header/VU.png";
import bf3 from "../header/bf3.ico";
import home from "../header/home.png";
import youtube from "../header/youtube.png"

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
              <>Home</>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={bf3} className="vu-icon"></img>
              </div>
              <>Play <br />Battlefield 3</>
            </button>
            <button className="irregular-button">
              <div className="menu-icon">
                <img src={vu} className="vu-icon"></img>
              </div>
              <>
                PLAY <br />
                Venice Unleashed
              </>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={vu} className="vu-icon"></img>
              </div>
              <>Tricks & Tips</>
            </button>
            <button className="irregular-button">
              {" "}
              <div className="menu-icon">
                <img src={versus}></img>
              </div>
              <>RANKED <br />COMPETETIVE</>
            </button>
            <button className="irregular-button">
              <div className="menu-icon">
                <img src={youtube} className="vu-icon"></img>
              </div>
              <>Videos</>
            </button>

            {/* Dodaj więcej nieregularnych przycisków */}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Content;
