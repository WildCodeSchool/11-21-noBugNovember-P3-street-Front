import { Link } from 'react-router-dom';
import '../styles/ProjectUserParticipate.css';

const ProjectUserParticipate = (props) => {
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
				</div>
			</Link>
		</div>
	);
};

export default ProjectUserParticipate;
