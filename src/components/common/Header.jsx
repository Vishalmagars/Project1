import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeaderNavbarLuxury() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Collection", path: "/products" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Certificates", path: "/Certificates" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-20">
          <nav className="flex-1 flex justify-start gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <NavItem key={link.label} to={link.path} label={link.label} />
            ))}
          </nav>

          {/* Center Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold uppercase tracking-[0.2em] hover:opacity-80 transition"
          >
            Crosson
          </Link>

          <nav className="flex-1 flex justify-end gap-10">
            {navLinks.slice(2).map((link) => (
              <NavItem key={link.label} to={link.path} label={link.label} />
            ))}
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-extrabold uppercase tracking-widest"
          >
            Crosson
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-900 hover:text-gray-600"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="block text-lg uppercase font-medium tracking-widest py-2 border-b border-transparent hover:border-black transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="relative uppercase tracking-widest text-sm font-medium text-gray-900 hover:text-black"
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
