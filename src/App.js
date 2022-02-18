import Connexion from './screens/Connexion';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import Users from './screens/Users';
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
				<Route path="/projets" element={<Project />} />
				<Route path="/talents" element={<Users />} />
				<Route path="/connexion" element={<Connexion />} />
			</Routes>
				<div className='home'>
					<Home />
				</div>
		</div>
	);
}

export default App;
