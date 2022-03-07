import '../styles/AdminGestionUsers.css';
// import "../styles/NavbarAdmin.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

import UsersInGestion from '../components/UsersInGestion';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminGestionUsers = () => {
	const [validatedUsers, setValidatedUsers] = useState([]);
	const [blockedUsers, setBlockedUsers] = useState([]);
	const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
	const [searchTerm, setSearchTerm] = useState();
	const [validatedUsersToFilter, setValidatedUsersToFilter] = useState([]);
	// const [viewMore, setViewMore] = useState(false);
	console.log(searchTerm);
	console.log(blockedUsers);
	console.log(validatedUsers);

	const getValidatedProjects = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/admin/validated_users`)
			.then((response) => response.data)
			.then((data) => setValidatedUsers(data));
	};

	const getBlockedProjects = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/admin/blocked_users`)
			.then((response) => response.data)
			.then((data) => setBlockedUsers(data));
	};
	const handleSearchTerm = (e) => {
		let value = e.target.value;
		setSearchTerm(value);
	};

	const handleFilter = () => {
		setIsFilter(false);
	};
	useEffect(() => {
		getValidatedProjects();
		getBlockedProjects();
	}, []);

	return (
		<div className="gestionUsersContainer">
			<div className="adminnavbar">
				<NavbarAdmin />
			</div>
			<div className="adminTitle">
				<h1>Gestion des utilisateurs</h1>
			</div>

			<div className="filtreGestionUsers">
				<div className="activ" onClick={handleFilter}>
					Utilisateurs validés
				</div>
				<div className="activ" onClick={() => setIsFilter(true)}>
					En attente de validation
				</div>
			</div>
			<div className="tableauContainer">
				{isFilter
					? blockedUsers.map((el) => (
							<UsersInGestion
								user={el}
								getBlockedUsers={getBlockedProjects}
								getValidatedUsers={getValidatedProjects}
							/>
					  ))
					: validatedUsers.map((el) => (
							<UsersInGestion
								user={el}
								getBlockedUsers={getBlockedProjects}
								getValidatedUsers={getValidatedProjects}
							/>
					  ))}
			</div>
		</div>
	);
};
export default AdminGestionUsers;
