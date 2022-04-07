import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import test2 from "../assets/test2.jpg";
import "../styles/Home.css";
import Footer from "../components/Footer";

const Home = () => {
  /* ====================================== DEBUT - RECUPERATION DONNEES ====================================== */

  const [last3projects, setLast3projects] = useState([]); //Stockage des données de l'axios

  const searchLast3Projects = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/last3projects`) //Récupération des données de la requete respondante a la route
      .then((response) => response.data) //Récupération de la partie "data" uniquement
      .then((data) => setLast3projects(data)); //Envoie des datas dans last3projects
  };

  /* ====================================== FIN - RECUPERATION DONNEES ====================================== */

  useEffect(() => {
    searchLast3Projects(); //Collecte des données des 3 projets les plus récents au chargement de la page
  }, []);

  return (
    <div>
      {/* ====================================== DEBUT - HOME BANNER ====================================== */}
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
      {/* ====================================== FIN - HOME BANNER ======================================== */}

      <div className="sections">
        {/* ====================================== DEBUT - PRESENTATION ====================================== */}

        <div className="homePresentation">
          <div className="framePresentation">
            <div className="framePresentationallP">
              <p>
                Présentation de <b>STREETZER</b>
              </p>
              <br></br>
              <p>« Le facilitateur d’émergences de projets artistiques » </p>
              <p>
                <b>STREETZER</b> est une plateforme de mise en relations
                artistiques afin de Co-créer des projets afin de révéler les
                talents de demain.
              </p>
              <p>
                « Briser l'isolement et libérer le potentiel artistique de
                chacun en favorisant la rencontre d'artistes et de techniciens.
                »
              </p>
            </div>{" "}
            <div className="btnNousrejoindre">
              <Link to="/connexion">
                <div className="">Nous rejoindre</div>
              </Link>
            </div>
          </div>
        </div>

        {/* ====================================== FIN - PRESENTATION ======================================== */}

        {/* ====================================== DEBUT - PROJETS TERMINES ====================================== */}

        <h1>Projets terminés récemment</h1>
        <div className="homeDoneProjects">
          {/* Génération des cartes ProjectCard via les données de last3projects */}
          {last3projects.map((el, index) => (
            <ProjectCard project={el} key={index} />
          ))}
        </div>
        <div className=" tousLesProjets">
          <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
            <div className="tousLesProjetsBtn">
              Tous les projets sur Youtube &#160;
              <i class="fa-brands fa-youtube"></i>
            </div>
          </a>
        </div>

        {/* ====================================== FIN - PROJETS TERMINES ======================================== */}

        <div className="containerSpacer">
          <div className="spacerHome"></div>
          <i class="fa-solid fa-bolt"></i>
          <div className="spacerHome"></div>
        </div>

        {/* ====================================== DEBUT - COMMENTAIRES ====================================== */}
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

        {/* ====================================== FIN - COMMENTAIRES ======================================== */}

        <div className="containerSpacer">
          <div className="spacerHome"></div>
          <i class="fa-solid fa-bolt"></i>
          <div className="spacerHome"></div>
        </div>

        {/* ====================================== DEBUT - SELECTEURS PROJECTS TALENTS ====================================== */}

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

        {/* ====================================== FIN - SELECTEURS PROJECTS TALENTS ======================================== */}

        {/* ====================================== DEBUT - FOOTER ====================================== */}
        <Footer />
        {/* ====================================== FIN - FOOTER ======================================== */}
      </div>
    </div>
  );
};

export default Home;
