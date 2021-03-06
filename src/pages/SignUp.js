import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ setIsTokenPresent }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <div className="sign-up">
        <h2>S'inscrire</h2>
        <form
          className="sign-up_form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className="form_input"
            type="text"
            placeholder="Nom d'utilisateur"
            name="name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />

          <input
            className="form_input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <p className="error_message">{errorMessage}</p>
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

          <div className="checkbox_container">
            <div className="checkbox">
              <input
                className="checkbox_input"
                type="checkbox"
                onClick={() => {
                  setNewsletter(!newsletter);
                }}
              />
              <span>S'inscrire à notre lewsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button
            className="form_btn"
            type="submit"
            onClick={async () => {
              try {
                const response = await axios.post(
                  "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                  // "https://vinted-bcknd.herokuapp.com/user/signup",
                  {
                    email: email,
                    username: username,
                    password: password,
                    newletter: newsletter,
                  }
                );
                console.log(response.data.token);
                Cookies.set("TokenCookie", response.data.token, {
                  expires: 3,
                });
                setIsTokenPresent(true);
                navigate("/");
              } catch (error) {
                if (error.response.status === 409) {
                  setErrorMessage("Ce compte existe déjà.");
                }
                console.log(error);
                console.log(error.response.data);
              }
            }}
          >
            S'inscrire
          </button>
          <Link to={"/login"}>Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      </div>
    </div>
  );
}
