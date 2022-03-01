import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../styles/Admin.css';

const Admin = () => {
	const [users, setUsers] = useState([]); //stockage données utilisateurs
	const [projects, setProjects] = useState([]); //stokage données projet

	const getUsers = () => {
		Axios.get(`${process.env.REACT_APP_BACK}/admin/status_users`)
			.then((response) => response.data)
			.then((data) => setUsers(data));
	};

	const getProjects = () => {
		Axios.get(`${process.env.REACT_APP_BACK}/admin/status_projects`)
			.then((response) => response.data)
			.then((data) => setProjects(data));
	};

	const usersBlocked = () => {
		let count = 0;
		for (let i = 0; i < users.length; i++) {
			if (users[i].blocked === 1) {
				count++;
			}
		}
		return count;
	};

	const projectsBlocked = () => {
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].blocked === 1) {
				count++;
			}
		}
		return count;
	};

	const projectsMate = () => {
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].status === 0) {
				count++;
			}
		}
		return count;
	};

	const projectsCompleted = () => {
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].status === 1) {
				count++;
			}
		}
		return count;
	};

	const projectsFinish = () => {
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].status === 2) {
				count++;
			}
		}
		return count;
	};

	useEffect(() => {
		getUsers();
		getProjects();
	}, []);

	return (
		<div className="admin">
			<div className="welcomeadmin">Page d'administration de Streetzer</div>
			<div className="dashboard">
				<div className="title">Dashboard</div>
				<div className="dashusers">
					<div className="titleuser">Utilisateurs</div>
					<div classNAme="contentusers">
						Nombre d'utilisateurs enregistrés : {users.length}
						<br />
						Nombre d'utilisateurs bloqués : {usersBlocked()}
					</div>
				</div>
				<div className="dashprojects">
					<div className="titleproject">Projets</div>
					<div classNAme="contentusers">
						Nombre de projets enregistrés : {projects.length}
						<br />
						Nombre de projets bloqués : {projectsBlocked()}
						<br />
						Nombre de projets en recherche d'équipiers : {projectsMate()}
						<br />
						Nombre de projets avec équipe complete : {projectsCompleted()}
						<br />
						Nombre de projets terminés : {projectsFinish()}
					</div>
				</div>
			</div>
			<div className="contenu">
				<div className="manageuser">Gestion des utilisateurs</div>
				<div className="manageproject">Gestion des projets</div>
			</div>
		</div>
	);
};

export default Admin;
