import '../styles/UserCard.css';
import avatar from '../assets/avatar.jpg';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

const ProjectCard = () => {
	return (
		<div className="userContainer">
			<div className="head">
				<div className="avatar">
					<img src={avatar} />
				</div>
				<div className="rightside">
					<div className="job">Danseuse étoile</div>
					<div className="pseudo">Romain - Julien V2</div>
				</div>
			</div>
			<div className="desc">
				Bonjour, je suis danseuse étoile avec tutu et tout le bazar et je suis
				disponible très prochainement
			</div>
			<div className="content">
				<div className="localisation">
					<i className="fa-solid fa-location-dot"></i> Nice - France
				</div>
				<div className="dispo">
					<i className="fa-solid fa-calendar-day" /> 01/03/2022
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
