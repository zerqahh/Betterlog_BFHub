import "./App.css";
import Main from "./components/main/main";
import LandingPage from "./components/landingpage/landingpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { supabase } from "./components/supabase";
import React, { useEffect, useState } from "react";
import store from "./components/data/store";
import { StoreProvider } from "easy-peasy";
///GLITCHE I FIXY
/// Uniemozliwisc niezalogowanym uzytkownikom przejscie do podstrony /bf3
function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/bf3/*" element={<Main />}></Route>
          </Routes>
        </Router>

        {/* <Main /> */}
      </div>
    </StoreProvider>
  );
}

export default App;
