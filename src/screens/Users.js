import UserCard from '../components/UserCard';
import '../styles/User.css';

const Users = () => {
	return (
		<div className="talent">
			<div className="grille">
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</div>
		</div>
	);
};

export default Users;
