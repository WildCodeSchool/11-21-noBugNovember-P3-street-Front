import '../styles/ProjectUserParticipate.css';

const ProjectUserParticipate = (props) => {
	return (
		<div className="isParticipate">
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
		</div>
	);
};

export default ProjectUserParticipate;
