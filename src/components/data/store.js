import { createStore, action } from "easy-peasy";
import { fetchUserData } from "../supabase";

const userModel = {
  user: null,

  setUser: action((state, user) => {
    // Zapisz dane użytkownika w localStorage
    localStorage.setItem("userData", JSON.stringify(user));
    state.user = user;
  }),

  clearUser: action((state) => {
    // Wyczyść dane użytkownika z localStorage
    localStorage.removeItem("userData");
    state.user = null;
  }),
  
  setUserDataFromSupabase: action(async (state, discordId) => {
    const userData = await fetchUserData(discordId);
    if (userData) {
      state.user = userData;
    }
  }),
};

const store = createStore({
  user: userModel,
});

export default store;
