import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LogIn({ setIsTokenPresent, isTokenPresent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Header
        isTokenPresent={isTokenPresent}
        setIsTokenPresent={setIsTokenPresent}
      />
      <div className="log-in">
        <h2>Se connecter</h2>
        <form
          className="log-in_form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className="form_input"
            type="email"
            placeholder="Adresse email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />

          <input
            className="form_input"
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <button
            className="form_btn"
            type="submit"
            onClick={async () => {
              try {
                const response = await axios.post(
                  "https://lereacteur-vinted-api.herokuapp.com/user/login",
                  {
                    email: email,
                    password: password,
                  }
                );
                console.log(response.data.token);
                Cookies.set("TokenCookie", response.data.token, { expires: 3 });
                setIsTokenPresent(true);
              } catch (error) {
                console.log(error);
                console.log(error.response.data);
              }
            }}
          >
            Se connecter
          </button>
          <Link to={"/signup"}>Pas encore de compte ? Inscris-toi !</Link>
        </form>
      </div>
    </div>
  );
}
