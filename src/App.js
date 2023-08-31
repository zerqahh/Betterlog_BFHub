import "./App.css";
import Main from "./components/main/main";
import LandingPage from "./components/landingpage/landingpage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from "./components/supabase";
import React, { useEffect, useState } from "react";

///GLITCHE I FIXY 
/// Uniemozliwisc niezalogowanym uzytkownikom przejscie do podstrony /bf3
function App() {

  // Pobieranie sesji aktualnego uzytkownika 
  //   const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const checkUserSession = async () => {
  //     const { data, error } = await supabase.auth.getSession();

  //     if (error) {
  //       console.error("Error fetching session:", error);
  //       setUser(null);
  //     } else if (data) {
  //       setUser(data.user ?? null);
  //     }
  //   };

  //   checkUserSession();
  // }, []);


  return (
    <div className="App">
      <Router>
    
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/bf3/*" element={<Main />} ></Route>
        </Routes>
      </Router>
      
      {/* <Main /> */}
    </div>
  );
}

export default App;
