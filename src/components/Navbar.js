
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../components/Navbar.css'
import Logo from '../assets/Logo.png'
import photo1 from '../assets/test.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import '@splidejs/splide/dist/css/splide.min.css';


const Navbar = () => {
  
  return (
    <div className="navbar_container">
       <img className="holderLogo" src={Logo} alt="Logo" />
       <div className="Link">
          <div className="accueil"> Accueil</div>
          <div className="holderLink"> Projets</div>
          <div className="holderLink"> Talents</div> 
          <div className="test"> Se connecter</div>
      </div>
       
     <div className="holderCarousel">
      <Splide>
          <SplideSlide>
            <img className='holderImg' src={photo1} alt='images' />
          </SplideSlide>
          <SplideSlide>
            <img className='holderImg' src={photo2} alt='images' />
          </SplideSlide>
          <SplideSlide>
            <img className='holderImg' src={photo3} alt='images' />
          </SplideSlide>
      </Splide>
      </div> 
    </div>  
  )
}

export default Navbar;