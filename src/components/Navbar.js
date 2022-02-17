import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../components/Navbar.css";
import Logo from "../assets/Logo.png";
import photo1 from "../assets/test.jpg";
import photo2 from "../assets/test2.jpg";
import photo3 from "../assets/test3.jpg";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <Link to="/">
          <div className="containerLogo">
            <img className="holderLogo" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="Link">
          <Link to="/">
            <div className="accueil"> Accueil</div>
          </Link>
          <Link to="/projets">
            <div className="holderLink"> Projets</div>
          </Link>
          <Link to="/talents">
            <div className="holderLink"> Talents</div>
          </Link>
        </div>
        <div className="containerConnexion">
          <Link to="/connexion">
            <div className="connexion">Se connecter</div>
          </Link>
        </div>
      </div>

      {
   <div className="holderCarousel">
      <Splide>
          <SplideSlide>
            <img className='holderImg' src={photo2} alt='images' />
          </SplideSlide>
          <SplideSlide>
            <img className='holderImg' src={photo3} alt='images' />
          </SplideSlide>
          <SplideSlide>
            <img className='holderImg' src={photo1} alt='images' />
          </SplideSlide>
      </Splide>
      </div>  
}
    </>
  );
};

export default Navbar;


