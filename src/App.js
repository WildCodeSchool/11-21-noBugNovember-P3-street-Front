import Connexion from "./screens/Connexion";
<<<<<<< HEAD
import Admin from "./screens/Admin";
=======
>>>>>>> dev
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Project from "./screens/Project";
import Users from "./screens/Users";
import CreateProject from "./components/CreateProject";
import UserDetail from "./screens/UserDetail";
import ProjectDetails from "./screens/ProjectDetails";
<<<<<<< HEAD
import AdminGestionUsers from "./screens/AdminGestionUsers";
import { Routes, Route } from "react-router-dom";
import "./App.css";
=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
>>>>>>> dev

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_projects" element={<CreateProject />} />
        <Route path="/admin" element={<Admin />} />
=======

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_projects" element={<CreateProject />} />
>>>>>>> dev
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/projets" element={<Project />} />
        <Route path="/talents" element={<Users />} />
        <Route path="/projets/:id" element={<ProjectDetails />} />
        <Route path="/talents/:id" element={<UserDetail />} />
<<<<<<< HEAD
        <Route path="/admin/users" element={<AdminGestionUsers />} />
=======
>>>>>>> dev
      </Routes>
    </div>
  );
}

export default App;
