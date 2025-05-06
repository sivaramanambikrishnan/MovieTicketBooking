import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Book-My-Tickets</h2>
          <p className="text-center">Book Tickets Enjoy the Day !</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
        
     
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons ">
            <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};


