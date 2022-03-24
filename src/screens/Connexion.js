import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import '../styles/Connexion.css';
import Footer from '../components/Footer';

function Connexion(props) {
	const [user, setUser] = useState({ email: '' });
	const [reponse, setReponse] = useState();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorConnect, setErrorConnect] = useState(false);
	const [isOut, setIsOut] = useState(false);

	const connect = () => {
		setErrorConnect(false);
		setIsOut(false);
		if (props.idUser === 0) {
			axios
				.put(`${process.env.REACT_APP_BACK}/users/connect`, {
					email: email,
					password: sha256(password).toString(),
				})
				.then((response) => response.data)
				.then((data) => setReponse(data))
				.catch((err) => {
					if (err.response) {
						setErrorConnect(true);
					} else if (err.request) {
						setIsOut(true);
					}
				});
		} else {
			console.log('error');
		}
	};

	const disconnect = () => {
		setEmail('');
		setPassword('');
		setReponse();
		props.setIdUser(0);
		props.setName();
		props.setIsConnect(false);
		props.setIsAdmin(false);
	};

	useEffect(() => {
		if (reponse !== undefined) {
			props.setIsConnect(true);
			props.setIdUser(reponse[0].id);
			props.setName(reponse[0].firstname);
			if (reponse[0].admin === 1) props.setIsAdmin(true);
		}
	}, [reponse]);

	return (
		<>
			<div className="connexion">
				{props.idUser !== 0 ? (
					<div className="welcome">
						<h2>Bienvenue chez StreetZer</h2>
						{props.isAdmin ? (
							<Link to="/admin">
								<button>Page d'administration</button>
							</Link>
						) : (
							''
						)}
						<button onClick={() => disconnect()}>LOGOUT</button>
					</div>
				) : (
					<form className="formUsers">
						<div className="form-inner">
							<h2>Login</h2>
							{errorConnect && (
								<p className="inputText" id="gridCo4">
									⚠ Mauvais nom d'utilisateur ou mot de passe
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
										type="button"
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
