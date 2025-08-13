import './Header.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleCTA = (target) => {
    navigate(`/${target}`);
  };

  return (
    <header className="home header-wrapper" aria-label="Site Header">
      <motion.div
        className="app__header app__flex"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Info Section */}
        <motion.div
          className="app__header-info"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__header-badge">
            <div className="tagline-block">
              <h2 className="head-text">
                Engineering Tomorrow’s, <span>Innovations</span> Today
              </h2>
              <p className="p-text">
                Building forward-thinking solutions that redefine industries — from defense to sports and education.
              </p>
              <div className="cta-buttons">
                <button onClick={() => handleCTA('projects')}>Explore Projects</button>
                <button onClick={() => handleCTA('contact')}>Contact Us</button>
              </div>
            </div>

            <motion.div
              className="mobile__img"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
              <img src="./header-profile.png" alt="Innovative work illustration" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="app__header-img"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <img src="./header-profile.png" alt="Header visual" className="right-person" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;