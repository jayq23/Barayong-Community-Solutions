


function Homepage() {





    return (
        <div className="homepage">
            <div className="header-content">
                <div className="barangay-logo">
                    <img src="assets/logo.png" alt="logo" className="logo"/>
                    <h1 className="barangay-name">Barangay Barayong</h1>
                </div>
                <div className="shorcuts">
                    <a href="home">Home</a>
                    <a href="about">About</a>
                    <a href="events">Events</a>
                    <a href="contact">Contact</a>
                </div>
                <div className="button">
                    <button>Get the App</button>
                </div>
            </div>
            <div className="main-content">
                <h1 className="greetings">Welcome to Barangay Barayong</h1>
                <h2>Discover the bright future of our barangay</h2>
            </div>
            <div className="footer">
                <div className="contacts">
                    <h3>Contact Us</h3>
                    <p>Email: info@barangaybarayong.com</p>
                    <p>Phone: +63 123 456 7890</p>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/share/1C2VQCLn4z/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                        Barayong Facebook Page
                    </a>
                    <a href="https://www.facebook.com/share/1Fe3nsEgKH/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                        Barayong Sk Facebook Page
                    </a>
                </div>
            </div>
        </div>
    )


}

export default Homepage;