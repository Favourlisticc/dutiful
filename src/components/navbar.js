import React from 'react';
import Logo from "../public/Group 65.png"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
         <Link to="/">
         <img src={Logo} alt="Logo" className="h-8 w-20" /></Link>
         
        </div>
        <nav className="flex space-x-16">
          <a href="#" className="text-gray-600 hover:text-gray-800">Business Directory</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-800">Pricing</Link>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
          <Link to="/support" className="text-gray-600 hover:text-gray-800">Support</Link>
        </nav>
        <div className="flex space-x-12">
          <Link to="/login" className="text-[#1E1E4B] hover:text-gray-800 mt-2 font-[500]">Login</Link>
          <Link to="/signup" className="px-4 py-2 border-2 border-[#603F8B] font-[500] text-[#603F8B] rounded hover:bg-purple-600 hover:text-white transition">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
