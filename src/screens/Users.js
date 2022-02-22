import UserCardAnnonce from '../components/UserCardAnnonce';
import UserCard from '../components/UserCard';
import '../styles/User.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
	const [dataTalent, setDataTalent] = useState([]);
	const [allUsers, setAllUsers] = useState([]);
	const [selectView, setSelectView] = useState(0);
	const [domain, setDomain] = useState([]);
	const [subDomain, setSubDomain] = useState([]);
	const [selectDomain, setSelectDomain] = useState();
	const [selectSubDomain, setSelectSubDomain] = useState();

	console.log(domain);
	console.log(subDomain);

	const choiceView = (id) => {
		setSelectView(id);
	};

	const searchAllUsers = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/allusers`)
			.then((response) => response.data)
			.then((data) => setAllUsers(data));
	};

	const searchAnnonces = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/annonces_all_users`)
			.then((response) => response.data)
			.then((data) => setDataTalent(data));
	};

	const searchDomain = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/domain`)
			.then((response) => response.data)
			.then((data) => setDomain(data));
	};

	const searchSubDomain = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/subdomain`)
			.then((response) => response.data)
			.then((data) => setSubDomain(data));
	};

	useEffect(() => {
		searchAllUsers();
		searchAnnonces();
		searchDomain();
		searchSubDomain();
	}, []);

	return (
		<div className="talent">
			<div className="introtalents">Liste de nos Membres</div>
			<div className="selecttalent">
				<div
					className={selectView === 0 ? 'all active' : 'all'}
					onClick={() => choiceView(0)}
				>
					Voir tous nos artistes
				</div>
				<div
					className={selectView === 1 ? 'select active' : 'select'}
					onClick={() => choiceView(1)}
				>
					Voir les annonces
				</div>
			</div>
			<div className="thefilter">
				<form className="formulaire">
					<div className="domain">Domaine</div>
				</form>
				<div className="subdomain">Sous-domaine</div>
				<div className="search">
					<i className="fa-solid fa-magnifying-glass" />
				</div>
				<div className="cancel">
					<i className="fa-solid fa-xmark"></i>
				</div>
			</div>
			<div className="grille">
				{selectView === 0
					? allUsers.map((users) => (
							<UserCard
								firstname={users.firstname}
								lastname={users.lastname}
								avatar={users.avatar}
								city={users.city}
								country={users.country}
								email={users.email}
								emailVisibility={users.emailVisibility}
								phone={users.phone}
								phoneVisibility={users.phoneVisibility}
								instagram={users.instagram}
								spotify={users.spotify}
								twitter={users.twitter}
								youtube={users.youtube}
								description={users.description_users}
								domain={users.domain}
								artname={users.art_name}
							/>
					  ))
					: dataTalent.map((users) => (
							<UserCardAnnonce
								firstname={users.firstname}
								lastname={users.lastname}
								avatar={users.avatar}
								domain={users.domain}
								art_name={users.art_name}
								email={users.email}
								emailVisibility={users.emailVisibility}
								phone={users.phone}
								phoneVisibility={users.phoneVisibility}
								city={users.city}
								country={users.country}
								instagram={users.instagram}
								spotify={users.spotify}
								twitter={users.twitter}
								youtube={users.youtube}
								descriptionAnnonce={users.description_annonce}
								date={users.date}
							/>
					  ))}
			</div>
		</div>
	);
};

export default Users;
