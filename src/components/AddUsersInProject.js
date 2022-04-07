import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminAddMates.css';

const AddUsersInProject = (props) => {
	const [reveal, setReveal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [dataSearch, setDataSearch] = useState([]);
	const [search, setSearch] = useState('');
	const [userId, setUserId] = useState(0);

	const addUserInProjet = () => {
		axios
			.post(`${process.env.REACT_APP_BACK}/admin/addUserInProject`, {
				users_id: userId,
				project_id: props.projectId,
			})
			.then((response) => response.data)
			.then((data) => props.usersInProject());
	};

	const changeUserId = (e) => {
		setUserId(e.target.value);
	};

	const searchUser = () => {
		setIsSearch(false);
		if (search !== '') {
			axios
				.put(`${process.env.REACT_APP_BACK}/admin/search_users`, {
					name: search,
				})
				.then((response) => response.data)
				.then((data) => setDataSearch(data));
			setSearch('');
			setIsSearch(true);
		}
	};

	const tapeSearch = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {}, [isSearch]);

	return (
		<div className="newcomponent">
			<div className="un">Ajouter un talent au projet</div>
			<div
				className={
					reveal === false && props.decouverte === true ? 'ajout' : 'cache'
				}
				onClick={() => setReveal(true)}
			>
				Ajouter une personne
			</div>
			<div
				className={reveal && props.decouverte === true ? 'recherche' : 'cache'}
				onChange={(e) => tapeSearch(e)}
			>
				<input
					value={search}
					type="textfield"
					placeholder="Nom ou prénom"
				></input>
			</div>
			<div
				className={
					reveal && isSearch && props.decouverte === true ? 'result' : 'cache'
				}
			>
				<select className="select-mates" name="listing" onChange={(e) => changeUserId(e)}>
					<option>Choix ci-dessous</option>
					{dataSearch.map((e) => (
						<option value={e.id}>
							{e.firstname} {e.lastname} - {e.art_name}
						</option>
					))}
				</select>
				<div className="ausecours" onClick={() => addUserInProjet()}>
					Valider le choix
				</div>
			</div>
			<div
				className={reveal && props.decouverte === true ? 'validation' : 'cache'}
				onClick={() => searchUser()}
			>
				Rechercher
			</div>
			<div
				className={reveal && props.decouverte === true ? 'annuler' : 'cache'}
				onClick={() => setReveal(false)}
			>
				Annuler
			</div>
		</div>
	);
};

export default AddUsersInProject;
