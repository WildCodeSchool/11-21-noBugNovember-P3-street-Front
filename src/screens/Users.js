import UserCard from '../components/UserCard';
import '../styles/User.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
	const [dataTalent, setDataTalent] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	console.log(dataTalent);
	console.log(allUsers);
	/*
	const searchAllUsers = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/alluser`)
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
*/
	return (
		<div className="talent">
			<div className="introtalents">Liste de nos Membres-Artistes</div>
			<div className="selecttalent">
				<div className="all">Voir tous nos artistes</div>
				<div className="select">Voir les annonces</div>
			</div>
			<div className="grille">
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</div>
		</div>
	);
};

export default Users;
