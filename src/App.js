import Connexion from './screens/Connexion';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import Users from './screens/Users';
import CreateProject from './components/CreateProject'
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
				<Route path='/' element={<Home />} />
				<Route path='/projets' element={<Project />} />
				<Route path='/talents' element={<Users />} />
				<Route path='/connexion' element={<Connexion />} /> 
				<Route path='/add_projects' element={<CreateProject />} />
				<Route path="/talents/:id" element={<UserDetail />} />
				<Route path="/connexion" element={<Connexion />} />
			</Routes>
		</div>
	);
}

export default App;
