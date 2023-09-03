import "./main.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import Content from "./content";
import store from "../data/store";
import { useStoreState,useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
function Main() {
  const stateData = useStoreState((state) => state.user.user);
  const setUser = useStoreActions((actions) => actions.user.setUser);
  useEffect(() => {
    // Funkcja do jednorazowego załadowania danych z localStorage
    const loadUserDataFromLocalStorage = () => {
      const userDataFromLocalStorage = localStorage.getItem('userData');
      if (userDataFromLocalStorage) {
        const userData = JSON.parse(userDataFromLocalStorage);
        setUser(userData);
      }
    };

    // Wywołaj funkcję tylko raz po załadowaniu komponentu
    loadUserDataFromLocalStorage();
  }, [setUser]);

  useEffect(() => {
    console.log("Dane użytkownika w Main:", stateData);
  }, [stateData]);


  return (
    <div className="main">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Main;
