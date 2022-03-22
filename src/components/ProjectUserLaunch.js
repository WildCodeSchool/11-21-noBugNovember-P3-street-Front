import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectUserLaunch.css';

const ProjectUserLaunch = (props) => {
	const [status, setStatus] = useState('');
	const projectLink = `/projets/${props.id}`;

	useEffect(() => {
		if (props.status === 0) {
			setStatus('Projet en cours - En recherche de personnel');
		} else if (props.status === 1) {
			setStatus('Projet en cours - équipe au complet');
		} else if (props.status === 2) {
			setStatus('Projet terminé');
		}
	}, []);

	return (
		<div className="isLaunch">
			<Link to={projectLink}>
				<div className="illustration">
					<img src={`${process.env.REACT_APP_BACK}/${props.logo}`} />
				</div>
				<div className="restes">
					<div className="blaze">{props.name}</div>
					<div className="envir">{props.domain}</div>
					<div className="onenestou">{status}</div>
				</div>
			</Link>
		</div>
	);
};

export default ProjectUserLaunch;
