import axios from 'axios';
import NavbarAdmin from '../components/NavbarAdmin';
import AdminDetailProject from '../components/AdminDetailProject';
import '../styles/AdminAddMates.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminAddMates = () => {
	const [projectDetail, setProjectDetail] = useState([]); //données BDD projet
	const [projectUsers, setProjectUsers] = useState([]); //données talents
	const [dataProject, setDataProject] = useState({});
	let { id } = useParams();

	//console.log('detail:', dataProject);
	console.log('talents:', projectUsers);

	const getProjectDetails = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_details/${id}`)
			.then((response) => response.data)
			.then((data) => setDataProject(data[0]));
	};

	const usersInProject = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_users/${id}`)
			.then((response) => response.data)
			.then((data) => setProjectUsers(data));
	};
	/*
	const convert = () => {
		setDataProject(projectDetail[0]);
	};
*/
	useEffect(() => {
		getProjectDetails();
		usersInProject();
	}, []);

	useEffect(() => {}, [projectDetail, projectUsers]);

	return (
		<div className="adminaddmates">
			<div className="adminnavbar">
				<NavbarAdmin />
			</div>
			<div className="lancement">
				<h2>Ajout de bonhommes</h2>
				<div className="encart">
					<AdminDetailProject
						dataProject={dataProject}
						projectUsers={projectUsers}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdminAddMates;
