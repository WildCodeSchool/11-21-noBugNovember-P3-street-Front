import UsersForProject from './UsersForProject';
import '../styles/AdminAddMates.css';

const AdminDetailProject = (props) => {
	const getStatus = () => {
		if (props.dataProject.status === 0) {
			return "En recherche d'équipiers";
		} else if (props.dataProject.status === 1) {
			return 'Equipe complète';
		} else {
			return 'Projet terminé';
		}
	};

	return (
		<div className="lesinfos">
			<div className="premierencart">
				<div className="lacarte">
					<div className="entete">Projet : {props.dataProject.name}</div>
					<div className="cqui">
						initiateur : {props.dataProject.firstname}{' '}
						{props.dataProject.lastname}
					</div>
					<div className="date_start">
						Date estimée de lancement : {props.dataProject.date_start}
					</div>
					<div className="date-end">
						Date estimée de fin :{' '}
						{props.dataProject.date_end !== null
							? props.dataProject.date_end
							: 'Non indiqué'}
					</div>
					<div className="status">{getStatus()}</div>
				</div>
			</div>
			<div className="secondencart">
				<div className="rien">L'équipe</div>
				<div className="equipiers">
					{props.projectUsers.map((e) => (
						<UsersForProject
							index={e.id}
							id={e.id}
							projectId={props.dataProject.id}
							firstname={e.firstname}
							lastname={e.lastname}
							avatar={e.avatar}
							job={e.art_name}
							usersInProject={props.usersInProject}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdminDetailProject;
