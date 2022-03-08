import axios from 'axios';
import NavbarAdmin from '../components/NavbarAdmin';
import '../styles/AdminAddMates.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminAddMates = () => {
	const [projectDetail, setProjectDetail] = useState([]);
	const [projectUsers, setProjectUsers] = useState([]);
	let { id } = useParams();

	console.log('detail:', projectDetail);
	console.log('talents:', projectUsers);

	const getProjectDetails = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_details/${id}`)
			.then((response) => response.data)
			.then((data) => setProjectDetail(data));
	};

	const usersInProject = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_users/${id}`)
			.then((response) => response.data)
			.then((data) => setProjectUsers(data));
	};

	useEffect(() => {
		getProjectDetails();
		usersInProject();
	}, []);

	return (
		<div className="adminaddmates">
			<div className="adminnavbar">
				<NavbarAdmin />
			</div>
			<div className="title">
				<h2>Ajout de bonhommes</h2>
			</div>
			<div className="lesdetails">Projet : {projectDetail.name}</div>
		</div>
	);
};

export default AdminAddMates;
