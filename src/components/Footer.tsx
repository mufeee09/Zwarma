import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about-section">
        <h3>About Zwarma</h3>
        <p>
          Experience the finest Middle Eastern cuisine in town.
          We take pride in serving authentic flavors with modern twists.
        </p>
        <div className="social-links">
          <a href="https://facebook.com" className="social-link facebook" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" className="social-link instagram" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/+917639571484" className="social-link whatsapp" aria-label="WhatsApp">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
      {/* <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Zwarma. All rights reserved.</p>
      </div> */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Zwarma. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;