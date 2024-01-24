import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import FAQ from "./Components/FAQs";


function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <button
              className="hamburger-menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              &#9776;
            </button>
            <ul
              className={`nav-links ${navbarOpen ? "active" : ""}`}
              style={{ justifyContent: "flex-end" }}
            >
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" activeClassName="active">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </nav>
          <h1 className="heading">Health and Wellness</h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>&copy; 2024 Health and Wellness</p>
          {/* <div className="social-icons">
            <img src="instagram-icon.png" alt="Instagram" />
            <img src="facebook-icon.png" alt="Facebook" />
            <img src="whatsapp-icon.png" alt="WhatsApp" />
            <img src="x-icon.png" alt="X" />
          </div> */}
        </footer>
      </div>
    </Router>
  );
}

export default App;