import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Collection", path: "/products" },
    { label: "Portfolio", path: "/portfolio" },

    { label: "About", path: "/about" },
    // { label: "Showcase", path: "/productShowcase" },
    { label: "Certificates", path: "/Certificates" },
    // { label: "Our Mission", path: "/ourmission" },
    // { label: "Our Vision", path: "/ourvision" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FiPhone className="text-gray-500" />
          <span>Need help?</span>
          <a href="tel:+08505447514" className="font-semibold text-black">
            +0(850) 544 7514
          </a>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <a href="https://www.linkedin.com/in/i-vishal-magar/" aria-label="LinkedIn" className="hover:text-yellow-600"><FaLinkedin /></a>
          <a href="https://www.instagram.com/vishal3_6_9/" aria-label="Instagram" className="hover:text-yellow-600"><FaInstagram /></a>
          <a href="https://x.com/" aria-label="Twitter" className="hover:text-yellow-600"><FaTwitter /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 border-b">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-yellow-600 transition">
          Crosson
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-base font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className="hover:text-yellow-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 py-2 border-t bg-white"
        >
          {navLinks.map((link) => (
            <li key={link.label} className="py-3 border-b text-gray-700">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block w-full hover:text-yellow-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
