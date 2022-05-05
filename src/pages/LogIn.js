import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../components/Header";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Header />
      <div className="log-in">
        <h2>Se connecter</h2>
        <form
          className="log-in_form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <button
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
              } catch (error) {
                console.log(error.response.data);
              }
            }}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
