// src/Layout.jsx
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white drop-shadow fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-blue-700">Logo</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to='/'><p className="text-black hover:text-gray-600">Home</p></Link>
              <Link to='/Services'><p className="text-black hover:text-gray-600">Services</p></Link>
              <Link to='/About'><p className="text-black hover:text-gray-600">About Us</p></Link>
              <Link to='/Projects'><p className="text-black hover:text-gray-600">Projects</p></Link>
              <Link to='/Partners'><p className="text-black hover:text-gray-600">Partners</p></Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl py-4">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link to='/'><p onClick={handleLinkClick} className="block px-4 py-2 text-black hover:bg-gray-200">Home</p></Link>
            <Link to='/Services'><p onClick={handleLinkClick} className="block px-4 py-2 text-black hover:bg-gray-200">Services</p></Link>
            <Link to='/About'><p onClick={handleLinkClick} className="block px-4 py-2 text-black hover:bg-gray-200">About Us</p></Link>
            <Link to='/Projects'><p onClick={handleLinkClick} className="block px-4 py-2 text-black hover:bg-gray-200">Projects</p></Link>
            <Link to='/Partners'><p onClick={handleLinkClick} className="block px-4 py-2 text-black hover:bg-gray-200">Partners</p></Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
