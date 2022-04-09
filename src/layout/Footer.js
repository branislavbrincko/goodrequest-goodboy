import logoPart1 from "../images/logo-part-1.png";
import logoPart2 from "../images/logo-part-2.png";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-column">
        <div className="logo-images">
          <img src={logoPart1} alt="logo image" className="logo-image-1"></img>
          <img src={logoPart2} alt="logo text" className="logo-image-2"></img>
        </div>
      </section>
      <section className="footer-column">
        <h3 className="footer-column-title">Nadácia Good Boy</h3>
        <div className="footer-column-content">
          <ul className="footer-list">
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                O projekte
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                Ako na to
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="footer-column">
        <h3 className="footer-column-title">Nadácia Good Boy</h3>
        <span className="footer-column-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </span>
      </section>
      <section className="footer-column">
        <h3 className="footer-column-title">Nadácia Good Boy</h3>
        <span className="footer-column-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </span>
      </section>
    </footer>
  );
}

export default Footer;
