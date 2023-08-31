import "./landing.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";



function LandingPage() {
  const navigate = useNavigate();
  const [recordCreated, setRecordCreated] = useState(false);

  async function handleUserAuthChange(event, session) {
    if (event === "SIGNED_IN" && session?.user) {
      const discordUserId = session.user.id;
      const username = session.user.user_metadata.full_name;
      const avatar = session.user.user_metadata.avatar_url;

      try {
        const userExists = await checkUserExists(discordUserId);

        if (!userExists) {
            await createUserRecord(discordUserId, username, avatar);
            setRecordCreated(true);
            navigate("/bf3"); // Przenieś użytkownika na /bf3 po stworzeniu rekordu
          } else {
            setRecordCreated(true); // Ustaw stan na true, jeśli użytkownik już istnieje
            navigate("/bf3"); // Przenieś użytkownika na /bf3 jeśli już istnieje
          }

     
      } catch (error) {
        console.error("Wystąpił błąd podczas przetwarzania:", error);
      }
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(handleUserAuthChange);
  }, []);

  useEffect(() => {
    if (recordCreated) {
    }
  }, [recordCreated]);

  async function createUserRecord(discordUserId, username, avatar) {
    console.log(
      "Próba tworzenia rekordu użytkownika:",
      discordUserId,
      username,
      avatar
    );
    const { data, error } = await supabase
      .from("users")
      .insert([{ discord_user_id: discordUserId, username, avatar }]);
    console.log("Odpowiedź od Supabase:", data, error);
    if (error) {
      console.error(
        "Wystąpił błąd podczas tworzenia rekordu użytkownika:",
        error
      );
      return null;
    }
    navigate("/bf3");
    return data[0];
  
  }

  async function checkUserExists(discordUserId) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("discord_user_id", discordUserId);

    if (error) {
      console.error("Wystąpił błąd podczas sprawdzania użytkownika:", error);
      return false;
    }

    console.log("Dane użytkownika:", data); // Dodaj ten log
    return data.length > 0;
  }

  return (
    <div className="landingpage">
      <div className="landingpage-container">
        <div className="landingpage-auth">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              primaryColor: "#ff0000",
              backgroundColor: "red",
            }}
            theme="dark"
            providers={["discord"]}
          ></Auth>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;