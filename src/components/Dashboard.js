import '../styles/Dashboard.css';

const Dashboard = (props) => {
	return (
		<div className="dashboard">
			<div className="title">Dashboard</div>
			<div className="infos">
				<div className="dashusers">
					<div className="titleuser">Utilisateurs</div>
					<div className="contentusers">
						Nombre d'utilisateurs enregistrés : {props.users.length}
						<br />
						Nombre d'utilisateurs bloqués : {props.usersBlocked()}
					</div>
				</div>
				<div className="dashprojects">
					<div className="titleproject">Projets</div>
					<div className="contentusers">
						Nombre de projets enregistrés : {props.projects.length}
						<br />
						Nombre de projets bloqués : {props.projectsBlocked()}
						<br />
						Nombre de projets en recherche d'équipiers : {props.projectsMate()}
						<br />
						Nombre de projets avec équipe complete : {props.projectsCompleted()}
						<br />
						Nombre de projets terminés : {props.projectsFinish()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
