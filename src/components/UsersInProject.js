import "../styles/ProjectDetails.css";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
const UsersInProject = ({ user }) => {
  const userId = `/talents/${user.id}`;
  return (
    <div className="usersInProject">
      <Link to={userId}>
        {/*       <div className="userName">
          {user.lastname}
          {user.firstname}
        </div> */}

        {user.avatar === null ? (
          <img src={avatar} alt={user.firstname} className="avatarUsers" />
        ) : (
          <img
            src={`${process.env.REACT_APP_BACK}/${user.avatar}`}
            /*  alt={user.firstname} */
            className="avatarUsers"
          />
        )}
      </Link>
    </div>
  );
};

export default UsersInProject;
