import '../styles/UserCard.css';
import avatar from '../assets/avatar.png';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

const UserCard = (props) => {
	return (
		<div className="userContainer">
			<div className="head">
				<div className="avatar">
					{props.avatar === null ? (
						<img src={avatar} alt={props.firstname} />
					) : (
						<img src={props.avatar} alt={props.firstname} />
					)}
				</div>
				<div className="rightside">
					<div className="job">
						{props.domain}
						<br />
						{props.artname}
					</div>
					<div className="pseudo">
						{props.firstname} {props.lastname}
					</div>
				</div>
			</div>
			<div className="desc">{props.description}</div>
			<div className="content">
				<div className="localisation">
					<i className="fa-solid fa-location-dot"></i> {props.city} -{' '}
					{props.country}
				</div>
				<div className="twitter">
					{props.twitter === null ? (
						''
					) : (
						<a href={props.twitter}>
							<i className="fa-brands fa-twitter"></i>
						</a>
					)}
				</div>
				<div className="youtube">
					{props.youtube === null ? (
						''
					) : (
						<a href={props.youtube}>
							<i className="fa-brands fa-youtube"></i>
						</a>
					)}
				</div>
				<div className="instagram">
					{props.instagram === null ? (
						''
					) : (
						<a href={props.instagram}>
							<i className="fa-brands fa-instagram"></i>
						</a>
					)}
				</div>
				<div className="spotify">
					{props.spotify === null ? (
						''
					) : (
						<a href={props.spotify}>
							<i className="fa-brands fa-spotify"></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserCard;
