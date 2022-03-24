import { Link } from "react-router-dom";
import "../styles/UserCard.css";
import avatar from "../assets/avatar.png";
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

const UserCard = (props) => {
  const usersId = `/talents/${props.id}`;
  return (
    <div className="userContainer">
      <Link to={usersId}>
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
            <div className="job">{props.artname}</div>
            <div className="pseudo">
              {props.firstname} {props.lastname}
            </div>
          </div>
        </div>

        <div className="desc">{props.description}</div>
      </Link>
      <div className="content">
        <div className="localisation">
          <i className="fa-solid fa-location-dot"></i> {props.city} -{" "}
          {props.country}
        </div>
        <div className="twitter">
          {props.twitter === null ? (
            ""
          ) : (
            <a href={props.twitter}>
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
        </div>
        <div className="youtube">
          {props.youtube === null ? (
            ""
          ) : (
            <a href={props.youtube}>
              <i className="fa-brands fa-youtube"></i>
            </a>
          )}
        </div>
        <div className="instagram">
          {props.instagram === null ? (
            ""
          ) : (
            <a href={props.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
        </div>
        <div className="spotify">
          {props.spotify === null ? (
            ""
          ) : (
            <a href={props.spotify}>
              <i className="fa-brands fa-spotify"></i>
            </a>
          )}
        </div>
        <div className="tiktok">
          {props.tiktok === null ? (
            ""
          ) : (
            <a href={props.tiktok}>
              <i className="fa-brands fa-tiktok" />
            </a>
          )}
        </div>
        {/*<div className="email">
					{props.emailVisibility ? (
						<a href={`mailto:${props.email}`}>
							<i className="fa-solid fa-envelope" />
						</a>
					) : (
						<i className="fa-solid fa-envelope bloque" />
					)}
					</div>*/}
        {/*<div className="phone">
					{props.phoneVisibility ? (
						<a href={`tel:${props.phone}`}>
							<i className="fa-solid fa-phone-flip" />
						</a>
					) : (
						<i className="fa-solid fa-phone-flip bloque" />
					)}
					</div>*/}
        <div className="available">
          {props.available ? (
            <i class="fa-solid fa-calendar-check" alt="Disponible !" />
          ) : (
            <i class="fa-solid fa-calendar-minus bye" alt="Non Disponible" />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
