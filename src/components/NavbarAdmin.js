import { useState } from 'react';
import '../styles/NavbarAdmin.css';

const NavbarAdmin = () => {
	const [active, setActive] = useState(false);

	return (
		<div className={active ? 'navbaradmin active' : 'navbaradmin'}>
			<div
				className={active ? 'nav active' : 'nav'}
				onClick={() => setActive(!active)}
			>
				<i class="fa-solid fa-angle-right" />
			</div>

			<div className={active ? 'gestionuser active' : 'gestionuser'}>
				<div className="icone">
					<i class="fa-solid fa-user" />
				</div>
				<div className={active ? 'text active' : 'text'}>Utilisateurs</div>
			</div>
			<div className={active ? 'gestionprojet active' : 'gestionprojet'}>
				<div className="icone">
					<i class="fa-solid fa-diagram-project" />
				</div>
				<div className={active ? 'text active' : 'text'}>Projets</div>
			</div>
			<div className={active ? 'gestionmate active' : 'gestionmate'}>
				<div className="icone">
					<i class="fa-solid fa-user" />
					<i class="fa-solid fa-bullhorn" />
				</div>
				<div className={active ? 'text active' : 'text'}>
					Annonces utilisateurs
				</div>
			</div>
			<div className={active ? 'gestionannonce active' : 'gestionannonce'}>
				<div className="icone">
					<i class="fa-solid fa-diagram-project" />
					<i class="fa-solid fa-bullhorn" />
				</div>
				<div className={active ? 'text active' : 'text'}>Annonces projets</div>
			</div>
		</div>
	);
};

export default NavbarAdmin;
