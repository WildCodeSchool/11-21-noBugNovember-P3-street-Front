import '../styles/Reseaux.css';

const Reseaux = (props) => {
	return (
		<div className="resal">
			<div className="video">
				{props.youtube !== null ? (
					<a href={props.youtube}>
						<i className="fa-brands fa-youtube"></i>
					</a>
				) : (
					``
				)}
			</div>
			<div className="rage">
				{props.twitter !== null ? (
					<a href={props.twitter}>
						<i className="fa-brands fa-twitter"></i>
					</a>
				) : (
					``
				)}
			</div>
			<div className="photos">
				{props.instagram === null ? (
					''
				) : (
					<a href={props.instagram}>
						<i className="fa-brands fa-instagram"></i>
					</a>
				)}
			</div>
			<div className="music">
				{props.spotify === null ? (
					''
				) : (
					<a href={props.spotify}>
						<i className="fa-brands fa-spotify"></i>
					</a>
				)}
			</div>
			<div className="toktok">
				{props.spotify === null ? (
					''
				) : (
					<a href={props.tiktok}>
						<i className="fa-brands fa-tiktok" />
					</a>
				)}
			</div>
		</div>
	);
};

export default Reseaux;
