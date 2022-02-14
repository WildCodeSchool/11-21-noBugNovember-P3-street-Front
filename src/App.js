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
				<Route>path='/' element={<Home />}</Route>
				<Route>path='/projets' element={<Project />}</Route>
				<Route>path='/talents' element={<Users />}</Route>
				<Route>path='/connexion' element={<Connexion />} </Route>
			</Routes>
		</div>
	);
}

export default App;
