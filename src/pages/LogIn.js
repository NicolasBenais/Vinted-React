import Header from "../components/Header";

const LogIn = () => {
  return (
    <div>
      <Header />
      <div className="log-in">
        <h2>Se connecter</h2>
        <form className="log-in_form" action="">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
