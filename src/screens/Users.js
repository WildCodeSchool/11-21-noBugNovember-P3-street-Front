import UserCardAnnonce from '../components/UserCardAnnonce';
import UserCard from '../components/UserCard';
import '../styles/User.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
	const [dataTalent, setDataTalent] = useState([]);
	const [allUsers, setAllUsers] = useState([]);
	const [selectView, setSelectView] = useState(0);

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

	useEffect(() => {
		searchAllUsers();
		searchAnnonces();
	}, []);

	return (
		<div className="talent">
			<div className="introtalents">Liste de nos Membres</div>
			<div className="selecttalent">
				<div className="all" onClick={() => choiceView(0)}>
					Voir tous nos artistes
				</div>
				<div className="select" onClick={() => choiceView(1)}>
					Voir les annonces
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
