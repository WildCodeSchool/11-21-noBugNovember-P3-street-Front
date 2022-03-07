import axios from 'axios';
import avatar from '../assets/avatar.png';
import { useState } from 'react';
import '../styles/ProjectsInGestion.css';

const ProjectsInGestion = ({
	project,
	getValidatedProjects,
	getBlockedProjects,
}) => {
	const [viewMore, setViewMore] = useState(false);

	const iWantView = () => {
		setViewMore(!viewMore);
	};

	return (
		<div className={viewMore ? 'projectgestion active' : 'projectgestion'}>
			<div className="premiereligne">
				<div className="buttomreveal" onClick={() => iWantView()}>
					<div className={viewMore ? 'premierebarre active' : 'premierebarre'}>
						\
					</div>
					<div className={viewMore ? 'secondebarre active' : 'secondebarre'}>
						/
					</div>
				</div>
				<div className="contentprojectadmin">
					<div className="nameproject">{project.name}</div>
					<div className="initiateur">
						Initié par : {project.firstname} {project.lastname}
					</div>
					<div className="start_date">
						Date estimée pour le lancement : {project.date}
					</div>
				</div>
			</div>
			<div className={viewMore ? 'secondeligne active' : 'secondeligne'}>
				<div className="cestlelogo">
					<img src={`${process.env.REACT_APP_BACK}/${project.logo}`} />
				</div>
				<div className="descrip">{project.description}</div>
			</div>
			<div className={viewMore ? 'troisiemeligne active' : 'troisiemeligne'}>
				<div className="thephone">
					<i className="fa-solid fa-phone-flip" />
					{'  '}
					{project.phone}
				</div>
				<div className="themail">
					<i className="fa-solid fa-envelope" />
					{'  '}
					{project.email}
				</div>
				<div className="lieuregion">
					<i className="fa-solid fa-location-dot" />
					{'  '}
					{project.region_name}
				</div>
				<div className="lesbouttons">
					<div className="onvalide">Valider le projet</div>
					<div className="onsupprime">Supprimer le projet</div>
				</div>
			</div>
		</div>
	);
};
export default ProjectsInGestion;
