import Header from "../components/Header";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="sign-up">
        <h2>S'inscrire</h2>
        <form className="sign-up_form" action="">
          <input type="text" name="name" placeholder="Nom d'utilisateur" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <div className="checkbox_container">
            <div className="checkbox">
              <input type="checkbox" />
              <span>S'inscrire à notre lewsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
