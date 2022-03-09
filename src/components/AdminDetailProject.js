import AddUsersInProject from './AddUsersInProject';
import UsersForProject from './UsersForProject';
import '../styles/AdminAddMates.css';

const AdminDetailProject = (props) => {
	const getStatus = () => {
		if (props.dataProject.status === 0) {
			return "En recherche d'équipiers";
		} else if (props.dataProject.status === 1) {
			return 'Equipe complete';
		} else {
			return 'Projet terminé';
		}
	};

	return (
		<div className="lesinfos">
			<div className="entete">Projet : {props.dataProject.name}</div>
			<div className="cqui">
				initiateur : {props.dataProject.firstname} {props.dataProject.lastname}
			</div>
			<div className="date_start">
				Date estimé de lancement : {props.dataProject.date_start}
			</div>
			<div className="date-end">
				Date estimé de fin :{' '}
				{props.dataProject.date_end !== null
					? props.dataProject.date_end
					: 'Non indiqué'}
			</div>
			<div className="status">{getStatus()}</div>
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
			<div className="essai2">
				<AddUsersInProject
					projectId={props.dataProject.id}
					usersInProject={props.usersInProject}
				/>
			</div>
		</div>
	);
};

export default AdminDetailProject;
