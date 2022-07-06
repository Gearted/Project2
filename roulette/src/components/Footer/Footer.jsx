import "./Footer.css";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import git from "../assets/Github.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="mentions">
        <p>Mentions Légales</p>
        <p>Copyright 2020</p>
      </div>
      <div className="contact">
        <ul>
          <li>Adresse</li>
          <li>Contact</li>
        </ul>
        <p>Nous Contacter</p>
      </div>

      <div className="reseau">
        <img className="reseaux" src={twitter} alt="twitter" />
        <img className="reseaux" src={facebook} alt="facebook" />
        <img className="reseaux" src={git} alt="git" />
      </div>
    </footer>
  );
}

export default Footer;
