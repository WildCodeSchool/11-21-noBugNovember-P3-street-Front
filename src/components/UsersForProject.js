import '../styles/AdminAddMates.css';

const UsersForProject = (props) => {
	console.log(props);

	return (
		<div className="essai">
			<div className="illustration2">
				<img src={`${process.env.REACT_APP_BACK}/${props.avatar}`} />
			</div>
			<div className="leprenom">
				{props.firstname} {props.lastname}
			</div>
			<div className="sub-domain">{props.job}</div>
			<div className="merci">Retirer du projet</div>
		</div>
	);
};

export default UsersForProject;
