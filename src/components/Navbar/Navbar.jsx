import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="navbar mx-auto px-6 py-4">
        {/* Logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Integrated <span className="text-blue-300">Systems AI</span>
          </a>
        </div>

        {/* Navbar Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            {[
              { name: "Home", to: "home" },
              { name: "Vision", to: "vision" },
              { name: "Services", to: "services" },
              { name: "Why Us", to: "whyus" },
              { name: "Contact", to: "contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}             // Enables active monitoring
                  smooth={true}
                  duration={500}
                  activeClass="text-indigo-400 border-b-2 border-indigo-400"
                  className="cursor-pointer hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <Link
            to="login"
            smooth={true}
            duration={500}
            className="btn bg-indigo-600 hover:bg-indigo-700 transition-all px-6 py-2 rounded-lg shadow-md cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
