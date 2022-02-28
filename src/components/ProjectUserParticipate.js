import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectUserParticipate.css';

const ProjectUserParticipate = (props) => {
	const [status, setStatus] = useState('');

	useEffect(() => {
		if (props.status === 0) {
			setStatus('Projet en cours - En recherche de personnel');
		} else if (props.status === 1) {
			setStatus('Projet en cours - équipe au complet');
		} else if (props.status === 2) {
			setStatus('Projet terminé');
		}
	}, []);

	const projectLink = `/projets/${props.id}`;
	return (
		<div className="isParticipate">
			<Link to={projectLink}>
				<div className="illustration">
					<img
						src={`${process.env.REACT_APP_BACK}/${props.logo}`}
						alt={props.name}
					/>
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

export default ProjectUserParticipate;
