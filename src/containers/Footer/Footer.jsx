import './Footer.scss';
import { IoMailSharp } from 'react-icons/io5';
import { FaLocationDot, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer section">
      <div className="app__footer">
        {/* Left Section */}
        <div className="app__footer-left gap-9">
          <div className="flex flex-col text-left gap-8 justify-start">
            <img src="./logo.svg" alt="Ransh Innovations logo" />
            <p className="p-text text-white opacity-80">
              Engineering Tomorrow's, Innovations Today
            </p>
          </div>

          <div className="app__footer-contact">
            <h2 className="bold-text">Contact Us</h2>

            {/* Email */}
            <div className="flex gap-4" aria-label="Email address">
              <IoMailSharp aria-hidden="true" />
              <a
                href="mailto:ranshinnovations@gmail.com"
                className="p-text"
                style={{ color: '#fff' }}
                aria-label="Send email"
              >
                ranshinnovations@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex gap-4" aria-label="Office address">
              <FaLocationDot aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=In+front+of+old+ITI+Building,+Meham+(Rohtak),+Haryana+-124112"
                target="_blank"
                rel="noopener noreferrer"
                className="p-text"
                style={{ color: '#fff' }}
                aria-label="View location on Google Maps"
              >
                In front of old ITI Building, Meham (Rohtak), Haryana -124112
              </a>
            </div>
          </div>

          <div className="app__footer-socials">
            <div className="social-inline">
              <h2 className="bold-text">Follow us on</h2>
              <a
                href="https://in.linkedin.com/company/ransh-innovations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="app__footer-right">
          <div className="app__footer-links">
            {/* Company Section */}
            <div className="footer-column">
              <h2 className="bold-text">Company</h2>
              <ul>
                <li><a href="/about" aria-label="Navigate to About Us">About Us</a></li>
                <li><a href="/career" aria-label="Navigate to Career page">Career</a></li>
                <li><a href="/contact" aria-label="Navigate to Contact Us">Contact Us</a></li>
                <li><a href="/blogs" aria-label="Navigate to Blog section">Blogs</a></li>
                <li><a href="/faq" aria-label="Navigate to Frequently Asked Questions">FAQ's</a></li>
              </ul>
            </div>

            {/* Projects Section */}
            <div className="footer-column">
              <h2 className="bold-text">Projects</h2>
              <ul>
                <li>
                  <a href="/projects#insports" aria-label="Scroll to InSports section">InSports</a>
                </li>
                <li>
                  <a href="/projects#news360" aria-label="Scroll to News360 section">News360</a>
                </li>
                <li>
                  <a href="/projects#engle" aria-label="Scroll to Engle project section">Engle</a>
                </li>
                <li>
                  <a href="/projects#speakeasy" aria-label="Scroll to SpeakEasy project section">SpeakEasy</a>
                </li>
                <li>
                  <a href="/projects#safepoint" aria-label="Scroll to SafePoint project section">SafePoint</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;