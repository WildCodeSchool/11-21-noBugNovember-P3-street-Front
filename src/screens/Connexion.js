import React, { useState } from "react";
import "../styles/Connexion.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Connexion() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Connecté(e)");
      setUser({
        email: details.email,
      });
    } else {
      console.log("Les infos ne correspondent pas !");
      setError("Les infos ne correspondent pas !");
    }
  };

  const Logout = () => {
    setUser({ email: "" });
  };
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      <div className="connexion">
        {user.email !== "" ? (
          <div className="welcome">
            <h2>Bienvenue chez StreetZer</h2>
            <button onClick={Logout}>LOGOUT</button>
          </div>
        ) : (
          <form onSubmit={submitHandler} className="formUsers">
            <div className="form-inner">
              <h2>Login</h2>
              {error !== "" ? <div className="error">{error}</div> : ""}
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
              <div className="buttons">
                <div className="connexionButton">
                  <input type="submit" value="Connexion" />
                </div>
                <div className="containerspacerConnexion">
                  <div className="spacerConnexion"></div>
                  <i class="fa-solid fa-bolt bolt-connexion"></i>
                  <div className="spacerConnexion"></div>
                </div>
                <div className="new">
                  <h3>Nouveau chez StreetZer ?</h3>
                </div>
                <Link to="/add_user">
                  <div className="creationButton">
                    <input type="submit" value="Créer un compte" />
                  </div>
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Connexion;
