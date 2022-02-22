import '../styles/UserCardAnnonce.css';
import avatar from '../assets/avatar.png';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

const UserCardAnnonce = (props) => {
	return (
		<div className="userContainer">
			<div className="head">
				<div className="avatar">
					{props.avatar === null ? (
						<img src={avatar} alt={props.firstname} />
					) : (
						<img
							src={`${process.env.REACT_APP_BACK}/${props.avatar}`}
							alt={props.firstname}
						/>
					)}
				</div>
				<div className="rightside">
					<div className="job">
						{props.domain}
						<br />
						{props.art_name}
					</div>
					<div className="pseudo">
						{props.firstname} {props.lastname}
					</div>
				</div>
			</div>
			<div className="desc">{props.descriptionAnnonce}</div>
			<div className="content">
				<div className="localisation">
					<i className="fa-solid fa-location-dot"></i> {props.city} -{' '}
					{props.country}
				</div>
				<div className="dispo">
					<i className="fa-solid fa-calendar-day" /> {props.date}
				</div>
			</div>
		</div>
	);
};

export default UserCardAnnonce;
