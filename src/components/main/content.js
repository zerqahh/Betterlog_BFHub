import "./content.scss";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Content() {
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
    <div className="content">
      {" "}
      <button onClick={handleLogout}>Wyloguj</button>
    </div>
  );
}

export default Content;
