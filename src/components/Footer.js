import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
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
    </div>
  );
}

export default Footer;
