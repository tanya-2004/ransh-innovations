import './Navbar.scss';
import { useState, useRef, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'home', link: '/' },
  { name: 'company', link: '#' },
  { name: 'projects', link: '/projects' },
];

const subMenuItems = [
  { name: 'About Us', link: '/about' },
  { name: 'Careers', link: '/career' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Contact Us', link: '/contact' },
  { name: "FAQ'S", link: '/faq' },
];

const Navbar = () => {
  const [isCompanyDesktopOpen, setIsCompanyDesktopOpen] = useState(false);
  const [isCompanyMobileOpen, setIsCompanyMobileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target)) {
        setIsCompanyDesktopOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
        setIsCompanyMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderSubMenu = ({ isMobile = false }) => (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`dropdown ${isMobile ? 'dropdown-mobile' : ''}`}
      ref={isMobile ? mobileDropdownRef : desktopDropdownRef}
    >
      {subMenuItems.map(({ name, link }) => (
        <li key={`${isMobile ? 'mobile-' : 'desktop-'}${name}`}>
          <Link to={link}>{name}</Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="./logo.svg" alt="Company logo" />
      </div>

      <ul className="app__navbar-links">
        {menuItems.map(({ name, link }) => (
          <li className="nav-item" key={`nav-${name}`}>
            {name === 'company' ? (
              <div className="dropdown-wrapper" ref={desktopDropdownRef}>
                <button
                  onClick={() => setIsCompanyDesktopOpen((prev) => !prev)}
                  aria-haspopup="true"
                  aria-expanded={isCompanyDesktopOpen}
                  className={`dropdown-toggle ${isCompanyDesktopOpen ? 'open' : ''}`}
                >
                  {name} <IoIosArrowDown />
                </button>
                {isCompanyDesktopOpen && renderSubMenu({ isMobile: false })}
              </div>
            ) : (
              <Link to={link}>{name}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* ✅ Hamburger icon visible only on mobile */}
      <button
        className="menu-opener"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open mobile menu"
      >
        <HiMenu />
      </button>

      <div className="app__navbar-menu">
        {isMenuOpen && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="menu-panel"
          >
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close mobile menu">
              <HiX />
            </button>

            <ul>
              {menuItems.map(({ name, link }) => (
                <li key={`mobile-${name}`}>
                  {name === 'company' ? (
                    <div className="dropdown-wrapper" ref={mobileDropdownRef}>
                      <button
                        onClick={() => setIsCompanyMobileOpen((prev) => !prev)}
                        aria-haspopup="true"
                        aria-expanded={isCompanyMobileOpen}
                        className={`dropdown-toggle ${isCompanyMobileOpen ? 'open' : ''}`}
                      >
                        {name} <IoIosArrowDown />
                      </button>
                      {isCompanyMobileOpen && renderSubMenu({ isMobile: true })}
                    </div>
                  ) : (
                    <Link to={link} onClick={() => setIsMenuOpen(false)}>
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;