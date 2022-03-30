import Admin from "./screens/Admin";
import AdminAddMates from "./screens/AdminAddMates";
import AdminGestionAnnonces from "./screens/AdminGestionAnnonces";
import AdminGestionUsers from "./screens/AdminGestionUsers";
import AdminGestionProjects from "./screens/AdminGestionProjects";
import AdminProjectEdition from "./screens/AdminProjectEdition";
import Connexion from "./screens/Connexion";
import CreateProject from "./components/CreateProject";
import Form from "./screens/Form.js";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Project from "./screens/Project";
import ProjectDetails from "./screens/ProjectDetails";
import Protected from "./components/Protected";
import ProtectedAdmin from "./components/ProtectedAdmin";
import Users from "./screens/Users";
import UserDetail from "./screens/UserDetail";
import CreateAnnonceUser from "./components/CreateAnnonceUser";
import CreateAnnonceProject from "./components/CreateAnnonceProject";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";
import AdminUserAnnonceEdition from "./screens/AdminUserAnnonceEdition";
import AdminProjectAnnonceEdition from "./screens/AdminProjectAnnonceEdition";
import UpdateProfil from "./screens/UpdateProfil";
import Profil from "./screens/Profil";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState();
  const [idUser, setIdUser] = useState(0);
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsConnect(true);
      let decoded = jwt_decode(localStorage.getItem("token"));
      setName(decoded.name);
      setIdUser(decoded.id);
    } else {
      setIsConnect(false);
      setIdUser(0);
    }
  }, []);
  console.log(idUser);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar isConnect={isConnect} name={name} idUser={idUser} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add_projects"
          element={
            <Protected>
              <CreateProject />
            </Protected>
          }
        />
        <Route
          path="/add_annonces_project"
          element={
            <Protected>
              <CreateAnnonceProject />
            </Protected>
          }
        />
        <Route
          path="/add_annonces_user"
          element={
            <Protected>
              <CreateAnnonceUser />
            </Protected>
          }
        />
        <Route path="/add_user" element={<Form />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <Admin />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/annonces"
          element={
            <ProtectedAdmin>
              <AdminGestionAnnonces />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/projets"
          element={
            <ProtectedAdmin>
              <AdminGestionProjects />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedAdmin>
              <AdminGestionUsers />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/ajout/:id"
          element={
            <ProtectedAdmin>
              <AdminAddMates />
            </ProtectedAdmin>
          }
        />
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
        <Route
          path="/edit_project/:id"
          element={
            <ProtectedAdmin>
              <AdminProjectEdition />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/edit_project_annonce/:id"
          element={<AdminProjectAnnonceEdition />}
        />
        <Route
          path="/edit_user_annonce/:id"
          element={<AdminUserAnnonceEdition />}
        />
        <Route path="/projets" element={<Project />} />
        <Route path="/projets/:id" element={<ProjectDetails />} />
        <Route path="/talents" element={<Users />} />
        <Route path="/talents/:id" element={<UserDetail />} />
        <Route
          path="/update_profil/:id"
          element={
            <Protected>
              <UpdateProfil />
            </Protected>
          }
        />
        <Route
          path="/profil"
          element={
            <Protected>
              <Profil idUser={idUser} />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
