<<<<<<< HEAD
import Connexion from "./screens/Connexion";
import Admin from "./screens/Admin";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Project from "./screens/Project";
import Users from "./screens/Users";
import CreateProject from "./components/CreateProject";
import UserDetail from "./screens/UserDetail";
import ProjectDetails from "./screens/ProjectDetails";
import AdminGestionUsers from "./screens/AdminGestionUsers";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

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
        <Route path="/admin/users" element={<AdminGestionUsers />} />
      </Routes>
    </div>
  );
=======
import Form from './screens/Form';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Project from './screens/Project';
import Users from './screens/Users';
import CreateProject from './components/CreateProject';
import UserDetail from './screens/UserDetail';
import ProjectDetails from './screens/ProjectDetails';
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
				<Route path="/connexion" element={<Form />} />
				<Route path="/projets" element={<Project />} />
				<Route path="/talents" element={<Users />} />
				<Route path="/projets/:id" element={<ProjectDetails />} />
				<Route path="/talents/:id" element={<UserDetail />} />
			</Routes>
		</div>
	);
>>>>>>> 6bbb272b30f32770b9664d69b5b4a9eb0faae7c7
}

export default App;
