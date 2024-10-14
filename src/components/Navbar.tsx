import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className="flex items-center px-4">
        <img src="src/img/logo-msu-w.png" alt="Company Logo" className="h-14 mr-0" />
        <a href="#home" className='font-bold text-lg text-white '>MS<span className='text-primary'>Unified</span></a>
      </div>
      <div className="relative hidden md:flex md:items-center md:space-x-4 px-6">
        <Link className="text-white block p-2 hover:text-primary hover:border transition duration-300 rounded-lg" to="/">Home</Link>
        <Link className="text-white block p-2 hover:text-primary hover:border transition duration-300 rounded-lg" to="/about">About Us</Link>
        <Link className="text-white block p-2 hover:text-primary hover:border transition duration-300 rounded-lg" to="/services">Services</Link>
        <Link className="text-white block p-2 hover:text-primary hover:border transition duration-300 rounded-lg" to="/teams">Teams</Link>
      </div>
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none pr-7"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      <ul className={`flex-col md:hidden ${isOpen ? 'flex' : 'hidden'} absolute right-6 top-full bg-gray-800 w-48 text-center rounded-lg`}>
        <li><Link className="text-white block p-2" to="/">Home</Link></li>
        <li><Link className="text-white block p-2" to="/about">About Us</Link></li>
        <li><Link className="text-white block p-2" to="/services">Services</Link></li>
        <li><Link className="text-white block p-2" to="/teams">Teams</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
