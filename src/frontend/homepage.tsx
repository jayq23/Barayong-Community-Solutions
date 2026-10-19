import logo from "../assets/logo.png";
import Bonifacio from "../assets/boniPic.jpg";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="official-bar">
        <span>Republic of the Philippines</span>
        <span>City of Ligao, Albay</span>
      </div>
      <header className="header-content">
        <a className="barangay-logo" href="#home" aria-label="Barangay Barayong home">
          <img src={logo} alt="Barangay Barayong logo" className="logo" />
          <span className="barangay-name">Barangay Barayong</span>
        </a>

        <nav className="shortcuts">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button" href="#contact">
          Resident Services App
        </a>
      </header>

      <main>
        <section className="main-content" id="home" aria-labelledby="welcome-heading">
          <p className="eyebrow">Official Barangay Website</p>
          <h1 className="greetings" id="welcome-heading">
            Welcome to Barangay Barayong
          </h1>
          <p className="hero-text">
            Serving our community with integrity, accountability, and compassion.
          </p>
          <a className="hero-link" href="#about">
            Learn about our barangay <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-heading">
          <div className="section-heading">
            <p className="eyebrow">Our Leadership</p>
            <h2 id="about-heading">About Barangay Barayong</h2>
            <p className="section-intro">
              Building a safe, progressive, and united community for every
              resident.
            </p>
          </div>
          <div id="captain-name">
            <img
              src={Bonifacio}
              alt="Barangay Captain Bonifacio Azores"
              id="captain-img"
            />
            <div>
              <p className="description-captain">
                Honorable Bonifacio B. Azores, fondly known by his constituents as
                &quot;Kap. Yen,&quot; serves as the duly elected Barangay Captain
                (Punong Barangay) of Barayong, Ligao City, Albay. Assuming office
                following the October 2023 Barangay and Sangguniang Kabataan
                Elections, Captain Azores leads an active administration dedicated
                to promoting grassroots development, ensuring community safety, and
                upgrading local infrastructure. His governance prioritizes
                agricultural sustainability to support the village&apos;s farming
                community, working with city officials to deliver accessible health,
                education, and social services to over 2,200 residents.
              </p>
              <span className="captain-title">Barangay Captain</span>
            </div>
          </div>

          <div className="place-description">
            <h3>Our Community</h3>
            <p>
              Barangay Barayong is an agricultural rural village in Ligao City,
              Albay, with a population of over 2,200 residents primarily engaged in
              rice and coconut farming. Named after the abundant
              &quot;Barayongon&quot; trees in its early history, the village was one
              of the original 20 foundational barangays established during the 1934
              cadastral survey. It serves as a local educational and community hub,
              featuring its own elementary and high schools alongside local
              governance led by Barangay Captain Bonifacio B. Azores.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-brand">
          <img src={logo} alt="" className="footer-logo" />
          <div>
            <strong>Barangay Barayong</strong>
            <span>Ligao City, Albay</span>
          </div>
        </div>
        <div className="contacts">
          <h2>Contact Us</h2>
          <address>
            <p>
              Email:{" "}
              <a href="mailto:info@barangaybarayong.com">
                info@barangaybarayong.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+631234567890">+63 123 456 7890</a>
            </p>
          </address>
        </div>

        <div className="social-media">
          <h2>Follow Us</h2>
          <a
            href="https://www.facebook.com/share/1C2VQCLn4z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barayong Facebook Page
          </a>
          <a
            href="https://www.facebook.com/share/1Fe3nsEgKH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barayong SK Facebook Page
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;