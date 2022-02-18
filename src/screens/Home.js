import './Home.css'
import moniteur from "../assets/moniteur.png";
import france from "../assets/france.png";
import reseaux from "../assets/reseaux.png";
import kohlanta from "../assets/kohlanta.png";
import equipe from "../assets/equipe.png";
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import photo1 from '../assets/test.jpg';
import photo2 from '../assets/test2.jpg';
import photo3 from '../assets/test3.jpg';


const Home = () => {
	return (
		<div>
			<div className="holderCarousel">
				<Splide>
					<SplideSlide>
						<img className="holderImg" src={photo2} alt="images" />
					</SplideSlide>
					<SplideSlide>
						<img className="holderImg" src={photo3} alt="images" />
					</SplideSlide>
					<SplideSlide>
						<img className="holderImg" src={photo1} alt="images" />
					</SplideSlide>
				</Splide>
			</div>
			<Link to="/projets">zrezrzrz</Link>
      
      <div className='home'>
      <h2>LA PLATEFORME QUI PERMET DE POSTER DES ANNONCES AFIN DE COLLABORER AUTOUR DE PROJETS ARTISTIQUES </h2>
            <img className="moniteur" src={moniteur} alt="" />
        <h2>AVEZ VOUS DEJA ENTENDU CETTE PHRASE : IL FAUT MONTER SUR PARIS POUR REUSSIR DANS LE MONDE ARTISTIQUE</h2>
        <div className='francecontainer'>
          <div><img className="france" src={france} alt="" /></div>
              <div><p className="spec">
              276 000 intermitants du spectacle dont 100 000 en île de France <br />
              A contrario en Province 25 000 en AURA <br />
              Ceci est l’Ancien Monde !
              </p></div>
              </div>
        <h2>ET POURTANT, LES OPPORTUNITÉS SONT LÀ ! NOUVEAU MONDE EN LIGNE</h2>
            <img className="reseaux" src={reseaux} alt="" />
              <ul className='stats'>
                <li>2 millions d'utilisateurs dans le monde</li>
                <li>76 millions de vidéos visionnées chaque jour</li>
                <li>77% des 18 ans et plus regardent des vidéos</li>
                <li>46 minutes de visionnage par jour</li>
              </ul>
        <h2>NOTRE VISION</h2>
        <div className='visioncontainer'>
        <div><img className="vision" src={kohlanta} alt="" /></div>
              <div><p className='isolement'>Briser l'isolement et libérer le potentiel artistique de chacun en favorisant la rencontre d'artistes et de techniciens.</p></div>
              </div>
        <h2>L'EQUIPE ET SES PARTENAIRES</h2>
            <img className="equipe" src={equipe} alt="" />
            </div>
		</div>
	);
};

export default Home;
