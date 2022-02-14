import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import Users from './screens/Users';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<Routes>
				<Route>path='/' element={<Home />}</Route>
				<Route>path='/projets' element={<Project />}</Route>
				<Route>path='/talents' element={<Users />} </Route>
			</Routes>
		</div>
	);
}

export default App;
