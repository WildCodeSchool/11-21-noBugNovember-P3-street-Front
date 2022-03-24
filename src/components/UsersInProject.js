import "../styles/ProjectDetails.css";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
const UsersInProject = ({ user }) => {
  const userId = `/talents/${user.id}`;
  let concatPrenom = user.firstname;
  let concatNom = user.lastname;

  const concatFirstLast = concatPrenom.concat(" ", concatNom);
  console.log(concatFirstLast);
  return (
    <Link to={userId}>
      <div data-before={concatFirstLast} className="usersInProject">
        {/*       <div className="userName">
          {user.lastname} {user.firstname}
        </div> */}

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
    </Link>
  );
};

export default UsersInProject;
