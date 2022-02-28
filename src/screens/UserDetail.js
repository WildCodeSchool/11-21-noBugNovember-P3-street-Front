import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectUserLaunch from '../components/ProjectUserLaunch';
import ProjectUserParticipate from '../components/ProjectUserParticipate';
import Reseaux from '../components/Reseaux';
import Axios from 'axios';
import '../styles/UserDetail.css';

const UserDetail = () => {
	const [data, setData] = useState([]); //Données talent
	const [participe, setParticipe] = useState(); //Projet où le talent est collaborateur
	const [projet, setProjet] = useState([]); //Projet où le talent est initiateur
	const [selectProjet, setSelectProjet] = useState(0);
	let { id } = useParams();

	const disponibilite = () => {
		if (data.available === 1) {
			return <i class="fa-solid fa-calendar-check" alt="Disponible !" />;
		} else {
			return <i class="fa-solid fa-calendar-minus bye" alt="Non disponible" />;
		}
	};

	const choiceProjet = (id) => {
		setSelectProjet(id);
	};

	const dataUser = () => {
		Axios.put(`${process.env.REACT_APP_BACK}/all/user`, { id: id })
			.then((response) => response.data)
			.then((data) => setData(data));
	};

	const userHasProjects = () => {
		Axios.put(`${process.env.REACT_APP_BACK}/all/userhasprojects`, { id: id })
			.then((response) => response.data)
			.then((data) => setParticipe(data));
	};

	const creatorOfProject = () => {
		Axios.put(`${process.env.REACT_APP_BACK}/all/project_creator`, { id: id })
			.then((response) => response.data)
			.then((data) => setProjet(data));
	};

	useEffect(() => {
		dataUser();
		userHasProjects();
		creatorOfProject();
	}, []);

	return (
		<div className="UserDetail">
			<div className="profil">
				<div className="perso">
					<img
						src={`${process.env.REACT_APP_BACK}/${data.avatar}`}
						alt={data.firstname}
					/>
				</div>
				<div className="blaze">
					{data.firstname} {data.lastname}
				</div>
				<div className="onejob">
					{data.domain} - {data.art_name}
				</div>
				<div className="living">
					{data.country} - {data.city}
				</div>
				<div className="dispo2">{disponibilite()}</div>
				<div className="description3">{data.description_users}</div>
				<div className="lesresals">
					{data.twitter !== undefined ||
					data.youtube !== undefined ||
					data.instagram !== undefined ||
					data.spotify !== undefined ? (
						<Reseaux
							youtube={data.youtube}
							twitter={data.twitter}
							spotify={data.spotify}
							instagram={data.instagram}
						/>
					) : (
						`Aucun réseaux sociaux de renseignés`
					)}
				</div>
			</div>
			<div className="projects">
				<div className="lefiltre">
					<div
						className={
							selectProjet === 0 ? 'lancerbyuser active' : 'lancerbyuser'
						}
						onClick={() => choiceProjet(0)}
					>
						Projet lancée par {data.firstname}
					</div>
					<div
						className={
							selectProjet === 1
								? 'participatebyuser active'
								: 'participatebyuser'
						}
						onClick={() => choiceProjet(1)}
					>
						Projet où {data.firstname} à participer
					</div>
				</div>
				<div className="result">
					<div className={selectProjet === 0 ? 'creator' : 'cache'}>
						<div className="lanceur">
							{projet !== undefined && projet.length > 0
								? projet.map((p) => (
										<ProjectUserLaunch
											id={p.id}
											name={p.name}
											logo={p.logo}
											status={p.status}
											description={p.description}
											domain={p.domain}
											youtube={p.youtubelink}
										/>
								  ))
								: ''}
						</div>
					</div>
					<div className={selectProjet === 1 ? 'participe' : 'cache'}>
						<div className="lanceur">
							{participe !== undefined && participe.length > 0
								? participe.map((pa) => (
										<ProjectUserParticipate
											id={pa.id}
											name={pa.name}
											status={pa.status}
											logo={pa.logo}
											domain={pa.domain}
										/>
								  ))
								: ''}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;

/*Stock temporaire

{data.available ? (
						<i class="fa-solid fa-calendar-check" alt="Disponible !" />
					) : (
						<i class="fa-solid fa-calendar-minus bye" alt="Non Disponible" />
					)}


<div className="carte">
				<div className="photo">
					<img
						src={`${process.env.REACT_APP_BACK}/${data.avatar}`}
						alt={data.firstname}
					/>
				</div>
				<div className="prez">
					<div className="whatsmyname">
						{data.firstname} {data.lastname}
					</div>
					<div className="metier">{data.art_name}</div>
					<div className="living">
						<i className="fa-solid fa-location-dot" /> {data.city} -{' '}
						{data.country}
					</div>
					<div className="aboutme">{data.description_users}</div>
					<div className="reseaux">
						{data.twitter !== undefined ||
						data.youtube !== undefined ||
						data.instagram !== undefined ||
						data.spotify !== undefined ? (
							<Reseaux
								youtube={data.youtube}
								twitter={data.twitter}
								spotify={data.spotify}
								instagram={data.instagram}
							/>
						) : (
							`Aucun réseaux sociaux de renseignés`
						)}
					</div>
				</div>
			</div>
			<div className="listprojects">
				<div className="creator">
					{projet !== undefined && projet.length > 0
						? `Projet lancé par ${data.firstname}`
						: `${data.firstname} n'a lancé aucun projet`}
					<br />
					<div className="lanceur">
						{projet !== undefined && projet.length > 0
							? projet.map((p) => (
									<ProjectUserLaunch
										name={p.name}
										logo={p.logo}
										status={p.status}
										description={p.description}
										domain={p.domain}
										youtube={p.youtubelink}
									/>
							  ))
							: ''}
					</div>
				</div>

				<div className="participe">
					{participe !== undefined && participe.length > 0
						? `Projet où ${data.firstname} a participé`
						: `${data.firstname} n'a participé à aucun projet`}
					<div className="lanceur">
						{participe !== undefined && participe.length > 0
							? participe.map((pa) => {
									<ProjectUserParticipate
										name={pa.name}
										status={pa.status}
										logo={pa.logo}
										domain={pa.domain}
									/>;
							  })
							: ''}
					</div>
				</div>
			</div>
*/
