import logo from "../assets/logo.png";
import Bonifacio from "../assets/boniPic.jpg";

function Homepage() {
  return (
    <div className="homepage">
      <header className="header-content">
        <div className="barangay-logo">
          <img src={logo} alt="Barangay Barayong logo" className="logo" />
          <span className="barangay-name">Barangay Barayong</span>
        </div>

        <nav className="shortcuts">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/contact">Contacts</a>
        </nav>
        
        <div className="button">
          <button type="button">Get the App</button>
        </div>
      </header>

      <main className="main-content">
        <h1 className="greetings">Welcome to Barangay Barayong</h1>
        <h2>Discover the bright future of our barangay</h2>
      </main>

      <div className="about-section">
        <h2>About Barangay barayong:</h2>
        <div id="captain-name">
          <img src={Bonifacio} alt="Barangay Captain Bonifacio Azores" id="captain-img" />
          <p className="description-captain">
            Honorable Bonifacio B. Azores, fondly known by his constituents as "Kap. Yen," serves as the duly elected Barangay Captain (Punong Barangay) of Barayong, Ligao City, Albay. Assuming office following the October 2023 Barangay and Sangguniang Kabataan Elections, Captain Azores leads an active administration dedicated to promoting grassroots development, ensuring community safety, and upgrading local infrastructure. His governance prioritizes agricultural sustainability to support the village's vast farming community, working hand-in-hand with city officials to deliver accessible health, education, and social services to over 2,200 residents.
          </p>
          <span className="captain-title">Barangay Captain</span>
        </div>
      </div>
      <footer className="footer">
        <div className="contacts">
          <h3>Contact Us</h3>
          <p>Email: info@barangaybarayong.com</p>
          <p>Phone: +63 123 456 7890</p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <a
            href="https://www.facebook.com/share/1C2VQCLn4z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook-icon.png" alt="" />
            Barayong Facebook Page
          </a>
          <a
            href="https://www.facebook.com/share/1Fe3nsEgKH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook-icon.png" alt="" />
            Barayong SK Facebook Page
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;