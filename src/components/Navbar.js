import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className="navbar_container">
				<Link to="/">
					<div className="containerLogo">
						<img className="holderLogo" src={Logo} alt="Logo" />
					</div>
				</Link>
				<div className="Link">
					<Link to="/">
						<div className="accueil"> Accueil</div>
					</Link>
					<Link to="/projets">
						<div className="holderLink"> Projets</div>
					</Link>
					<Link to="/talents">
						<div className="holderLink"> Talents</div>
					</Link>
				</div>
				<div className="containerConnexion">
					<Link to="/connexion">
						<div className="connect">Se connecter</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
