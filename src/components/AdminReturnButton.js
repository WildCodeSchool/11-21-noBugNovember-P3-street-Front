import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminReturnButton.css";
import Arrow from "../assets/icons8-back.png";
const AdminReturnButton = ({ route }) => {
  const path = route;
  return (
    <div className="returnButtonHolder">
      <div className="returnButton">
        <Link to={path}>
          <img src={Arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AdminReturnButton;
