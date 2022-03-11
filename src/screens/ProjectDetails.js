import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UsersInProject from '../components/UsersInProject';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
	const [projectDetail, setProjectDetail] = useState([]);
	const [projectUsers, setProjectUsers] = useState([]);
	const params = useParams();
	console.log('details', projectDetail);

<<<<<<< HEAD
  const getProjectDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_details/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectDetail(data));
  };
  const usersInProject = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectUsers(data));
  };
=======
	const getProjectDetails = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_details/${params.id}`)
			.then((response) => response.data)
			.then((data) => setProjectDetail(data));
	};
	const usersInProject = () => {
		axios
			.get(`${process.env.REACT_APP_BACK}/all/project_users/${params.id}`)
			.then((response) => response.data)
			.then((data) => setProjectUsers(data));
		// setNoCreator(projectUsers.filter((el) => el.firstname.includes(projectDetail.firstname));
	};
>>>>>>> bc720b56e273fdd83e84dea24f644c8ba6fc6d88

	useEffect(() => {
		getProjectDetails();
		usersInProject();
	}, []);

	return (
		<div className="projectDetailsContainer">
			<div className="projectTitle">
				<h1>{projectDetail.map((el) => el.name)}</h1>
			</div>
			<div className="projectInfos">
				<div className="projectInfosContainer">
					<div className="imgTextContainer">
						{projectDetail.map((el) => (
							<img
								src={`${process.env.REACT_APP_BACK}/${el.logo}`}
								alt=""
								className="projectAvatar"
							/>
						))}

<<<<<<< HEAD
            <div className="projectTextContainer">
              <p>{projectDetail.map((el) => el.description)}</p>
              <p>
                Créateur du projet : {projectDetail.map((el) => el.firstname)}
                {projectDetail.map((el) => el.lastname)}
              </p>
            </div>
          </div>
          <div className="userSection">
            <div className="usersTitle">
              <h2>Participants au projet :</h2>
            </div>
            {projectUsers
              
              .map((el, index) => (
                <UsersInProject user={el} key={index} />
              ))}
          </div>
        </div>
        <div className="playerContainer">
          {console.log(projectDetail.youtubelink)}
          <iframe
            src={`https://www.youtube.com/embed/${projectDetail.map(
              (el) => el.youtubelink
            )}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
            className="player"
          ></iframe>
        </div>
      </div>
    </div>
  );
=======
						<div className="projectTextContainer">
							<p>{projectDetail.map((el) => el.description)}</p>
							<p>
								Créateur du projet : {projectDetail.map((el) => el.firstname)}
								{projectDetail.map((el) => el.lastname)}
							</p>
						</div>
					</div>
					<div className="userSection">
						<div className="usersTitle">
							<h2>Participants au projet :</h2>
						</div>
						{projectUsers
							// .filter((el) => el.firstname.includes(projectDetail.firstname))
							.map((el, index) => (
								<UsersInProject user={el} key={index} />
							))}
					</div>
				</div>
				<div className="playerContainer">
					{console.log(projectDetail.youtubelink)}
					<iframe
						src={`https://www.youtube.com/embed/${projectDetail.map(
							(el) => el.youtubelink
						)}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
						allowfullscreen
						className="player"
					></iframe>
				</div>
			</div>
		</div>
	);
>>>>>>> bc720b56e273fdd83e84dea24f644c8ba6fc6d88
};

export default ProjectDetails;
