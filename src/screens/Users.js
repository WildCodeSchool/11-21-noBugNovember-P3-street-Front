import SearchDomain from "../components/SearchDomain";
import SearchSubDomain from "../components/SearchSubDomain";
import UserCardAnnonce from "../components/UserCardAnnonce";
import UserCard from "../components/UserCard";
import "../styles/User.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]); //données de tous les utilisateurs
  const [dataTalent, setDataTalent] = useState([]); //données des utilisateurs ayant posté une annonce
  const [domain, setDomain] = useState([]); //Liste des domaines
  const [selectDomain, setSelectDomain] = useState(); //Choix utilisateur domaines
  const [selectSubDomain, setSelectSubDomain] = useState(); //Choix utilisateuur sous-domaines
  const [selectView, setSelectView] = useState(0); //Choix entre tous les users et les annonces
  const [subDomain, setSubDomain] = useState([]); //Liste des sous-domaines
  const [viewDomain, setViewDomain] = useState(false); //Vue de la liste des domaines
  const [viewSubDomain, setViewSubDomain] = useState(false);
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  const [filter, setFilter] = useState([]);

<<<<<<< HEAD
  const arreteTout = (id) => {
    setIsFilter(false);
    choiceView(id);
  };
=======
	console.log(dataTalent);

	const arreteTout = (id) => {
		setIsFilter(false);
		choiceView(id);
	};
>>>>>>> dev

  const letsGo = () => {
    let temp;
    if (
      selectDomain !== undefined &&
      selectSubDomain !== undefined &&
      selectView === 0
    ) {
      temp = allUsers.filter((e) => e.domain === selectDomain);
      temp = temp.filter((e) => e.art_name === selectSubDomain);
    } else if (
      selectDomain !== undefined &&
      selectSubDomain !== undefined &&
      selectView === 1
    ) {
      temp = allUsers.filter(
        (e) => e.domain === selectDomain && e.art_name === selectSubDomain
      );
    } else if (
      selectDomain !== undefined &&
      selectSubDomain === undefined &&
      selectView === 0
    ) {
      temp = allUsers.filter((e) => e.domain === selectDomain);
    } else if (
      selectDomain !== undefined &&
      selectSubDomain === undefined &&
      selectView === 1
    ) {
      temp = dataTalent.filter((e) => e.domain === selectDomain);
    } else if (
      selectSubDomain !== undefined &&
      selectDomain === undefined &&
      selectView === 0
    ) {
      temp = allUsers.filter((e) => e.art_name === selectSubDomain);
    } else if (
      selectSubDomain !== undefined &&
      selectDomain === undefined &&
      selectView === 1
    ) {
      temp = dataTalent.filter((e) => e.art_name === selectSubDomain);
    }
    console.log(temp);
    if (temp !== undefined) {
      setFilter(temp);
      setIsFilter(true);
    }
  };

  const goodBye = () => {
    setIsFilter(false);
    setFilter();
    setSelectDomain();
    setSelectSubDomain();
  };

  const choiceView = (id) => {
    setSelectView(id);
  };

  const derouleDomain = () => {
    setViewDomain(!viewDomain);
  };

  const derouleSubDomain = () => {
    setViewSubDomain(!viewSubDomain);
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

  const searchDomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/domain`)
      .then((response) => response.data)
      .then((data) => setDomain(data));
  };

  const searchSubDomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/subdomain`)
      .then((response) => response.data)
      .then((data) => setSubDomain(data));
  };

  //Chargement des données necessaires à la page
  useEffect(() => {
    searchAllUsers();
    searchAnnonces();
    searchDomain();
    searchSubDomain();
  }, []);

<<<<<<< HEAD
  return (
    <div className="talent">
      <div className="introtalents">Liste de nos Membres</div>
      <div className="selecttalent">
        <div
          className={selectView === 0 ? "all active" : "all"}
          onClick={() => arreteTout(0)}
        >
          Voir tous nos artistes
        </div>
        <div
          className={selectView === 1 ? "select active" : "select"}
          onClick={() => arreteTout(1)}
        >
          Voir les annonces
        </div>
      </div>
      <div className="thefilter">
        <div className="domain" onClick={() => derouleDomain()}>
          {selectDomain !== undefined ? selectDomain : "Domaine"}
          <div className={viewDomain ? "hello" : "cache"}>
            <SearchDomain
              domain={domain}
              setSelectDomain={setSelectDomain}
              setViewDomain={setViewDomain}
            />
          </div>
        </div>
        <div className="subdomain" onClick={() => derouleSubDomain()}>
          {selectSubDomain !== undefined ? selectSubDomain : "Sous-domaine"}
          <div className={viewSubDomain ? "hello" : "cache"}>
            <SearchSubDomain
              selectDomain={selectDomain}
              subDomain={subDomain.sort((a, b) => a - b)}
              setSelectSubDomain={setSelectSubDomain}
              setViewSubDomain={setViewSubDomain}
            />
          </div>
        </div>
        <div className="search" onClick={() => letsGo()}>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="cancel" onClick={() => goodBye()}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="grille">
        {selectView === 0
          ? isFilter
            ? filter.map((users) => (
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
            : allUsers.map((users) => (
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
          : isFilter
          ? filter.map((users) => (
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
=======
	return (
		<div className="talent">
			<div className="introtalents">Liste de nos Membres</div>
			<div className="selecttalent">
				<div
					className={selectView === 0 ? 'all active' : 'all'}
					onClick={() => arreteTout(0)}
				>
					Voir tous nos artistes
				</div>
				<div
					className={selectView === 1 ? 'select active' : 'select'}
					onClick={() => arreteTout(1)}
				>
					Voir les annonces
				</div>
			</div>
			<div className="thefilter">
				<div className="domain" onClick={() => derouleDomain()}>
					{selectDomain !== undefined ? selectDomain : 'Art'}
					<div className={viewDomain ? 'hello' : 'cache'}>
						<SearchDomain
							domain={domain}
							setSelectDomain={setSelectDomain}
							setViewDomain={setViewDomain}
						/>
					</div>
				</div>
				<div className="subdomain" onClick={() => derouleSubDomain()}>
					{selectSubDomain !== undefined ? selectSubDomain : 'Métiers'}
					<div className={viewSubDomain ? 'hello' : 'cache'}>
						<SearchSubDomain
							selectDomain={selectDomain}
							subDomain={subDomain.sort((a, b) => a - b)}
							setSelectSubDomain={setSelectSubDomain}
							setViewSubDomain={setViewSubDomain}
						/>
					</div>
				</div>
				<div className="search" onClick={() => letsGo()}>
					<i className="fa-solid fa-magnifying-glass" />
				</div>
				<div className="cancel" onClick={() => goodBye()}>
					<i className="fa-solid fa-xmark"></i>
				</div>
			</div>
			<div className="grille">
				{selectView === 0
					? isFilter
						? filter.map((users) => (
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
									available={users.available}
								/>
						  ))
						: allUsers.map((users) => (
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
									available={users.available}
								/>
						  ))
					: isFilter
					? filter.map((users) => (
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
>>>>>>> dev
};

export default Users;
