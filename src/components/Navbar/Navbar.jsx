import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Vision</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>AI Research & Development Lab</a></li>
            <li><a>Integrated AI Solutions</a></li>
            <li><a>Branded Ventures</a></li>
            <li><a>Shadow Ventures</a></li>
          </ul>
        </li>
        <li><a>Why us</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl flex flex-col leading-tight">
  Integrated <span className="text-blue-300">Systems AI</span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><a>Home</a></li>
     <li><a>Vision</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>AI Research & Development Lab</a></li>
            <li><a>Integrated AI Solutions</a></li>
            <li><a>Branded Ventures</a></li>
            <li><a>Shadow Ventures</a></li>
          </ul>
        </details>
      </li>
      <li><a>Why us</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;