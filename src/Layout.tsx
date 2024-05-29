// src/Layout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-gray-900">Logo</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Projects</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Partners</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl py-4">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Partners</a>
          </div>
        </div>
      </nav>
      <main className="flex-grow mt-16">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
