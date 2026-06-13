import "./footer.scss";
import wb from "../../../assets/images/wb-games-logo.svg";
import netheriam from "../../../assets/images/netherrealm.svg";
import PS5 from "../../../assets/images/ps5_tm.svg";
import xbox from "../../../assets/images/xbox-series-x-s.svg";
import ninten from "../../../assets/images/nintendo-switch.svg";
import steam from "../../../assets/images/steam.svg";
import epic from "../../../assets/images/epic.svg";
import wbs from "../../../assets/images/wb-shield-white.svg";
import esr from "../../../assets/images/esrb.svg"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="logoFooter">
            <img src={wb} alt="images" />
            <img src={netheriam} alt="images" />
            <img className="ps" src={PS5} alt="images" />
            <img className="ps" src={xbox} alt="images" />
            <img src={ninten} alt="images" />
            <img className="ps" src={steam} alt="images" />
            <img src={epic} alt="images" />
          </div>

          <div className="text-footer">
            <h3 className="h2Footer">
              MORTAL KOMBAT 1 Software © 2024 Warner Bros. Entertainment Inc.
              Developed by NetherRealm Studios. Unreal® Engine, copyright
              1998-2024 Epic Games, Inc. Unreal, Unreal Technology and the
              Powered by Unreal Technology logo are trademarks or registered
              trademarks of Epic Games, Inc. Uses Oodle Data Compression
              Copyright and Bink Video (C) 1997-2024 by RAD Game Tools,
              Inc.NETHERREALM STUDIOS LOGO, MORTAL KOMBAT, THE DRAGON LOGO, and
              all related characters and elements are trademarks of and © 2024
              Warner Bros. Entertainment Inc.
            </h3>
          </div>

          <div className="lastText">
            <img className="wbs" src={wbs} alt="images" />
            <h2>
              WARNER BROS. GAMES LOGO, WARNER BROS. INTERACTIVE LOGO, WB SHIELD:
               Warner Bros. Entertainment Inc.
            </h2>
            <img src={esr} alt="images" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
