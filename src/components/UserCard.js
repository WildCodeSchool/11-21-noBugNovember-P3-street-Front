import "./UserCard.css";
import avatar from "../assets/avatar.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectCard = () => {
  return (
    <div className="userContainer">
      <div className="cardHeader">
        <div className="catName">
          <div className="catContainer">
            <h1>PEINTRE</h1>
          </div>
          <div className="name">
            <h3>Romain Marsaleix</h3>
          </div>
        </div>
        <div className="avatarContainer">
          <img src={avatar} alt="" className="avatar" />
        </div>
      </div>
      <div className="userInfo">
        {/* <p>Romain Marsaleix, 31ans</p> */}

        <p>
          <img
            src="https://img.icons8.com/cotton/20/000000/worldwide-location--v1.png"
            className="locIcon"
          />
          Nice
        </p>
        <p>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/20/000000/external-calendar-logistic-delivery-kiranshastry-lineal-color-kiranshastry-1.png"
            className="locIcon"
          />
          Disponible dès janvier 2022
        </p>
        <div className="descriptionUser">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eos
            sequi, facere magnam dolor molestiae in minima illo. Obcaecati
            dolorum numquam, consectetur dolore quasi non vitae facere veritatis
            nesciunt repellat!"
          </p>
          <div>
            <button className="buttonUser">CONTACTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
