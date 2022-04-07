import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import NavbarAdmin from "../components/NavbarAdmin";
import Axios from "axios";
import "../styles/Admin.css";

const Admin = (props) => {
  const [users, setUsers] = useState([]); //stockage données utilisateurs
  const [projects, setProjects] = useState([]); //stokage données projet

  const getProjects = () => {
    Axios.get(`${process.env.REACT_APP_BACK}/admin/status_projects`)
      .then((response) => response.data)
      .then((data) => setProjects(data));
  };

  const getUsers = () => {
    Axios.get(`${process.env.REACT_APP_BACK}/admin/status_users`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  };

  const projectsBlocked = () => {
    let count = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].blocked === 1) {
        count++;
      }
    }
    return count;
  };

  const projectsCompleted = () => {
    let count = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].status === 1) {
        count++;
      }
    }
    return count;
  };

  const projectsFinish = () => {
    let count = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].status === 2) {
        count++;
      }
    }
    return count;
  };

  const projectsMate = () => {
    let count = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].status === 0) {
        count++;
      }
    }
    return count;
  };

  const usersAvailable = () => {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].available === 1) {
        count++;
      }
    }
    return count;
  };

  const usersBlocked = () => {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].blocked === 1) {
        count++;
      }
    }
    return count;
  };

  useEffect(() => {
    getUsers();
    getProjects();
  }, []);

  return (
    <div className="admin">
      {localStorage.getItem("token") ? (
        <section>
          <h2 className="welcomeadmin">Page d'administration de Streetzer</h2>
          <div className="contentadmin">
            <div className="adminnavbar">
              <NavbarAdmin />
            </div>
            <div className="tableau">
              <Dashboard
                users={users}
                projects={projects}
                usersBlocked={usersBlocked}
                usersAvailable={usersAvailable}
                projectsBlocked={projectsBlocked}
                projectsMate={projectsMate}
                projectsCompleted={projectsCompleted}
                projectsFinish={projectsFinish}
              />
            </div>
          </div>
        </section>
      ) : (
        <div>Tu n'as pas être là !</div>
      )}
    </div>
  );
};

export default Admin;
