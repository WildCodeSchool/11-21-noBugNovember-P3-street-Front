import Admin from './screens/Admin';
import Connexion from './screens/Connexion';
import CreateProject from './components/CreateProject';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import ProjectDetails from './screens/ProjectDetails';
import Users from './screens/Users';
import UserDetail from './screens/UserDetail';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add_projects" element={<CreateProject />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/connexion" element={<Connexion />} />
				<Route path="/projets" element={<Project />} />
				<Route path="/talents" element={<Users />} />
				<Route path="/projets/:id" element={<ProjectDetails />} />
				<Route path="/talents/:id" element={<UserDetail />} />
			</Routes>
		</div>
	);
}

export default App;
