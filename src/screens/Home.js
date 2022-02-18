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
		</div>
	);
};

export default Home;
