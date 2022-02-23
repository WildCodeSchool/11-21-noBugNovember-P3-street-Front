import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import '../styles/UserDetail.css';

const UserDetail = () => {
	const [data, setData] = useState([]); //Données talent
	const [participe, setParticipe] = useState([]); //Projet où le talent est collaborateur
	const [projet, setProjet] = useState([]); //Projet où le talent est initiateur
	let { id } = useParams();

	console.log(data);
	console.log(participe);

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

	useEffect(() => {
		dataUser();
		userHasProjects();
	}, []);

	return (
		<div className="UserDetail">
			<div className="entete">
				<div className="photo">
					<img
						src={`${process.env.REACT_APP_BACK}/${data.avatar}`}
						alt={data.firstname}
					/>
				</div>
				<div className="blaze">
					{data.firstname}
					<br />
					{data.lastname}
				</div>
			</div>
			<div className="listprojects">
				<div className="creator">Projet lancé par {data.firstname} </div>
				<div className="participe">Projet où {data.firstname} a participé</div>
			</div>
		</div>
	);
};

export default UserDetail;
