import UserCard from '../components/UserCard';
import '../styles/User.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
	const [dataTalent, setDataTalent] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/annonces_all_users`)
			.then((response) => response.data)
			.then((data) => setDataTalent(data));
	}, []);

	return (
		<div className="talent">
			<div className="introtalents">Nos talents blablabla...</div>
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
