import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const response = axios.post(
    "https://lereacteur-vinted-api.herokuapp.com/user/signup",
    {
      email: email,
      username: username,
      password: password,
      newletter: newsletter,
    }
  );

  return (
    <div>
      <Header />
      <div className="sign-up">
        <h2>S'inscrire</h2>
        <form
          className="sign-up_form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />

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

          <div className="checkbox_container">
            <div className="checkbox">
              <input
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
            type="submit"
            onClick={() => {
              console.log(username, email, password, newsletter);
              console.log(response);
            }}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
