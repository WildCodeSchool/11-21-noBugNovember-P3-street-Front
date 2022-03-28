import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
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
						<div className="navbarBtn accueil "> Accueil</div>
					</Link>
					<Link to="/projets">
						<div className="navbarBtn holderLink "> Projets</div>
					</Link>
					<Link to="/talents">
						<div className="navbarBtn holderLink "> Talents</div>
					</Link>
				</div>
				<div className="containerConnexion">
					{props.isConnect ? (
						<div className="navbarBtn connexion">{props.name}</div>
					) : (
						<Link to="/connexion">
							<div className="navbarBtn connexion">Connexion</div>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
