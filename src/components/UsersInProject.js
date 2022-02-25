import "../styles/ProjectDetails.css";
import avatar from "../assets/avatar.png";
const UsersInProject = ({ user }) => {
  return (
    <div className="usersInProject">
      {user.lastname}
      {user.firstname}
      <div className="avatarContainer">
        {user.avatar === null ? (
          <img src={avatar} alt={user.firstname} className="avatarUsers" />
        ) : (
          <img
            src={`${process.env.REACT_APP_BACK}/${user.avatar}`}
            alt={user.firstname}
            className="avatarUsers"
          />
        )}
      </div>
    </div>
  );
};

export default UsersInProject;
