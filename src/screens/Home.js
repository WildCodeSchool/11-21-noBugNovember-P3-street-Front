import { Link } from "react-router-dom";
import guitarneon from "../assets/front.jpg";
import Assmaph from "../assets/Assmaph.jpg";
import test2 from "../assets/test2.jpg";
import "../styles/Home.css";
import UserCard from "../components/UserCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/*       <div className="holderCarousel">
        <Splide>
          <SplideSlide>
            <img className="holderImg" src={photo2} alt="images" />
          </SplideSlide>
          <SplideSlide>
            <img className="holderImg" src={guitarneon} alt="images" />
          </SplideSlide>
          <SplideSlide>
            <img className="holderImg" src={hommeregard} alt="images" />
          </SplideSlide>
        </Splide>
      </div> */}
      <div className="homeBanner">
        <div className="overlayBanner">
          <h1>
            “Lorsqu'on rêve tout seul, ce n'est qu'un rêve alors que lorsqu'on
            rêve à plusieurs c'est déjà une réalité. L'utopie partagée, c'est le
            ressort de l'Histoire.”
          </h1>
          <h1 className="quoteAuthor">
            <em>- Elder Camara</em>
          </h1>
        </div>
        <img className="holderImg" src={test2} alt="images" />
      </div>
      <div className="sections">
        <div className="homePresentation">
          <div className="framePresentation">
            <p>
              Présentation de <b>STREETZER</b>
            </p>
            <p>« Le facilitateur d’émergences de projets artistiques » </p>
            <p>
              <b>STREETZER</b> est une plateforme de mise en relations
              artistiques afin de Co-créer des projets afin de révéler les
              talents de demain.
            </p>
            <p>
              « Briser l'isolement et libérer le potentiel artistique de chacun
              en favorisant la rencontre d'artistes et de techniciens. »
            </p>
            <div className="btnNousrejoindre">Nous rejoindre</div>
          </div>
        </div>
        <h1>Projets terminés récemment</h1>
        <div className="homeDoneProjects">
          <UserCard
            avatar={null}
            firstname="Break Free"
            artname="Street Art"
            description="« Un vent de liberté souffle dans la ville de Toulouse avec ce projet Street Art. Un besoin vital de se libérer et reprendre le contrôle de nos vies. »"
          />
          <UserCard
            avatar={null}
            firstname="King Monsters"
            artname="Musique"
            description="Nina est une nouvelle artiste chanteuse – Interprète, à l’univers plutôt sombre. King Monsters est son premier tube qu’elle partage sur la plateforme. "
          />
          <UserCard
            avatar={null}
            firstname="Back to Dust"
            artname="Court métrage"
            description="Ethan étant malade, épuisé et cerné par la vie, voit son état se dégrader de jours en jours, sans amélioration. Ne lui restant plus beaucoup de temps."
          />
        </div>
        <div className=" tousLesProjets">
          <div className="tousLesProjetsBtn">
            Tous les projets sur Youtube &#160;
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="containerSpacer">
          <div className="spacerHome"></div>
          <i class="fa-solid fa-bolt"></i>
          <div className="spacerHome"></div>
        </div>
        <div className="sections comments">
          <h1>Des gens parlent de nous !</h1>
          <div className="containerComments">
            <div className="comment comment1">
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="textComment">
                <div>
                  Si vous voulez voir vos rêves se réaliser, foncez ! Ne vous
                  posez plus de question !
                </div>
                <div className="cta commentAuteur">Lucinea, Chanteuse</div>
              </div>
            </div>
            <div className="comment comment1">
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
              </div>
              <div className="textComment">
                <div>
                  Je peux enfin voir mes histoires prendre vies et les partager
                  avec tout le monde !
                </div>
                <div className="cta commentAuteur">Sirius, Auteur</div>
              </div>
            </div>
            <div className="comment comment1">
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="textComment">
                <div>Plus qu’un réseau d’artistes, une véritable famille !</div>
                <div className="cta commentAuteur">Kevin, Réalisateur</div>
              </div>
            </div>
          </div>
        </div>
        <div className="containerSeeComments">
          <div className="seeComments">Voir les commentaires</div>
        </div>
        <div className="containerSpacer">
          <div className="spacerHome"></div>
          <i class="fa-solid fa-bolt"></i>
          <div className="spacerHome"></div>
        </div>

        <h1>À vous de jouer !</h1>
        <div className="sections searchTalentProjectContainer">
          <div className="searchWhat searchTalent">
            <Link to="/talents">
              <i class="fa-brands fa-searchengin"></i>
            </Link>
            <div className="">Vous cherchez un talent ?</div>
          </div>
          <div className="searchWhat searchProject">
            <Link to="/projets">
              <i class="fa-solid fa-folder-tree"></i>
            </Link>
            <div className="">Vous cherchez un projet ?</div>
          </div>
        </div>
        {/*         <div className="footer">
          <div className="containerCol">
            <div className="colFooter col1">
              <div className="colFooterHeader">
                <i class="fa-solid fa-music"></i> Streetzer
              </div>
              <div className="colFooterInfosParaph">
                Ullamco mollit amet adipisicing aliquip do culpa labore esse
                consequat voluptate magna.
              </div>
            </div>
            <div className="colFooter col2">
              <div className="colFooterHeader">Streetzer</div>
              <div className="colFooterInfosContainer">
                <div className="colFooterInfos">Blog</div>
                <div className="colFooterInfos">Youtube Premium</div>
              </div>
            </div>
            <div className="colFooter col3">
              <div className="colFooterHeader">Partners</div>
              <div className="colFooterInfosContainer">
                <div className="colFooterInfos">Advertise</div>
                <div className="colFooterInfos">Creators</div>
                <div className="colFooterInfos">Developers</div>
                <div className="colFooterInfos">Press</div>
                <div className="colFooterInfos">Preferred Lineups</div>
              </div>
            </div>
            <div className="colFooter col4">
              <div className="colFooterHeader">Resources</div>
              <div className="colFooterInfosContainer">
                <div className="colFooterInfos">Policies & Safety</div>
                <div className="colFooterInfos">Copyright</div>
                <div className="colFooterInfos">Brand Guidelines</div>
                <div className="colFooterInfos">Help Center</div>
                <div className="colFooterInfos">Privacy</div>
              </div>
            </div>
            <div className="colFooter col5">
              <div className="colFooterHeader">Connect</div>
              <div className="colFooterInfosContainer">
                <div className="colFooterInfos">
                  <i class="fa-brands fa-twitter"></i> Twitter
                </div>
                <div className="colFooterInfos">
                  <i class="fa-brands fa-instagram"></i> Instagram
                </div>
                <div className="colFooterInfos">
                  <i class="fa-brands fa-facebook-square"></i> Facebook
                </div>
              </div>
            </div>
          </div>
          <div className="bottomFooter">© 2022 Streetzer</div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
