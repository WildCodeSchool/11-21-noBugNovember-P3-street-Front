import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import sha256 from "crypto-js/sha256";
import jwt_decode from "jwt-decode";
import "../styles/Connexion.css";
import Footer from "../components/Footer";

function Connexion(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorConnect, setErrorConnect] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const [forLoad, setForLoad] = useState(0);

  let navigate = useNavigate();

  const connect = () => {
    setErrorConnect(false);
    setIsOut(false);
    if (props.idUser === 0) {
      axios
        .post(`${process.env.REACT_APP_BACK}/auth/login`, {
          email: email,
          password: sha256(password).toString(),
        })
        .then((res) => {
          props.setIsConnect(true);
          localStorage.setItem("token", res.headers["x-access-token"]);
          let decoded = jwt_decode(localStorage.getItem("token"));
          props.setName(decoded.name);
          props.setIdUser(decoded.id);
        })
        .then(() => props.setIsConnect(true))
        .catch((err) => {
          if (err.response) {
            setErrorConnect(true);
          } else if (err.request) {
            setIsOut(true);
          }
        });
    } else {
    }
  };

  const disconnect = () => {
    localStorage.clear();
    props.setIsConnect(false);
  };

  const timer = async () => {
    for (let i = 0; i < 101; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setForLoad(i);
    }
    navigate("/");
  };

  useEffect(() => {
    if (props.isConnect) {
      timer();
    }
  }, [props.isConnect, localStorage.getItem("token")]);

  return (
    <>
      <div className="connexion">
        {props.isConnect || localStorage.getItem("token") !== null ? (
          <div className="welcome">
            <h2>Bienvenue chez StreetZer</h2>
            <h3>Vous êtes bien connecté {props.name}</h3>
            <h3>Redirection vers la page d'accueil</h3>
            <progress value={forLoad} max="100" className="barre"></progress>
          </div>
        ) : (
          <form className="formUsers">
            <div className="form-inner">
              <h2>Login</h2>
              {errorConnect && (
                <p className="inputText" id="gridCo4">
                  ⚠ Mauvais nom d'utilisateur ou mot de passe <br />
                  Si vous venez de créer votre compte, celui-ci doit être validé
                  par un administrateur
                </p>
              )}
              {isOut && (
                <p className="inputText" id="gridCo4">
                  ⚠ Serveur distant indisponible
                </p>
              )}
              <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password : </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="buttons">
                <div className="connexionButton">
                  <input
                    onClick={() => connect()}
                    type="submit"
                    value="Connexion"
                  />
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
                    <input type="button" value="Créer un compte" />
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
