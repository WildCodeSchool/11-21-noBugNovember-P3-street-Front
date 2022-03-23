import Admin from './screens/Admin';
import AdminAddMates from './screens/AdminAddMates';
import AdminGestionAnnonces from './screens/AdminGestionAnnonces';
import AdminGestionUsers from './screens/AdminGestionUsers';
import AdminGestionProjects from './screens/AdminGestionProjects';
import Connexion from './screens/Connexion';
import CreateProject from './components/CreateProject';
import Footer from './components/Footer';
import Form from './screens/Form.js';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import ProjectDetails from './screens/ProjectDetails';
import Users from './screens/Users';
import UserDetail from './screens/UserDetail';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [name, setName] = useState();
	const [idUser, setIdUser] = useState(0);
	const [isConnect, setIsConnect] = useState(false);

	console.log(isAdmin);
	console.log(name);
	console.log(isConnect);

	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add_projects" element={<CreateProject />} />
				<Route path="/add_user" element={<Form />} />
				<Route path="/admin" element={<Admin isAdmin={isAdmin} />} />
				<Route path="/admin/users" element={<AdminGestionUsers />} />
				<Route path="/admin/projets" element={<AdminGestionProjects />} />
				<Route path="/admin/annonces" element={<AdminGestionAnnonces />} />
				<Route path="/admin/ajout/:id" element={<AdminAddMates />} />
				<Route
					path="/connexion"
					element={
						<Connexion
							isAdmin={isAdmin}
							setIsAdmin={setIsAdmin}
							name={name}
							setName={setName}
							idUser={idUser}
							setIdUser={setIdUser}
							isConnect={isConnect}
							setIsConnect={setIsConnect}
						/>
					}
				/>
				<Route path="/projets" element={<Project />} />
				<Route path="/projets/:id" element={<ProjectDetails />} />
				<Route path="/talents" element={<Users />} />
				<Route path="/talents/:id" element={<UserDetail />} />
			</Routes>
		</div>
	);
}

export default App;
