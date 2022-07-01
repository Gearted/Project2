import "./Footer.css"


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
        <p>Réseaux Sociaux</p>
      </div>
    </footer>
  );
}

export default Footer;
