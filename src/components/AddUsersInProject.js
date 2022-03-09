import { useEffect, useState } from 'react';
import axios from 'axios';

const AddUsersInProject = (props) => {
	const [reveal, setReveal] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [dataSearch, setDataSearch] = useState([]);
	const [search, setSearch] = useState('');
	const [userId, setUserId] = useState(0);

	//console.log(userId);
	//console.log(dataSearch);

	const tapeSearch = (e) => {
		setSearch(e.target.value);
	};

	const changeUserId = (e) => {
		setUserId(e.target.value);
	};

	const addUserInProjet = () => {
		axios
			.post(`${process.env.REACT_APP_BACK}/admin/addUserInProject`, {
				users_id: userId,
				project_id: props.projectId,
			})
			.then((response) => response.data)
			.then((data) => props.usersInProject());
	};

	const searchUser = () => {
		setIsSearch(false);
		axios
			.put(`${process.env.REACT_APP_BACK}/admin/search_users`, { name: search })
			.then((response) => response.data)
			.then((data) => setDataSearch(data));
		setIsSearch(true);
	};

	useEffect(() => {}, [isSearch]);

	return (
		<div className="newcomponent">
			<div
				className={reveal === false ? 'ajout' : 'cache'}
				onClick={() => setReveal(true)}
			>
				Ajouter une personne
			</div>
			<div
				className={reveal ? 'recherche' : 'cache'}
				onChange={(e) => tapeSearch(e)}
			>
				<input type="textfield"></input>
			</div>
			<div className={reveal && isSearch ? 'result' : 'cache'}>
				<select name="listing" onChange={(e) => changeUserId(e)}>
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
				className={reveal ? 'validation' : 'cache'}
				onClick={() => searchUser()}
			>
				Rechercher
			</div>
			<div
				className={reveal ? 'annuler' : 'cache'}
				onClick={() => setReveal(false)}
			>
				Annuler
			</div>
		</div>
	);
};

export default AddUsersInProject;
