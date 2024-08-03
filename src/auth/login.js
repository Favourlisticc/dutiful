import React from 'react';
import Navbar from "../components/navbar"
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Login = () => {
  return (
    <>
    <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="px-8 w-full max-w-md">
        <p className='text-left font-extralight'>Jump right back in</p>
        <h2 className="text-left text-[36px] font-[600] text-[#1E1E4B] mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-left font-[500] text-[#603F8B]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div>
            <label className="block text-left font-[500] text-[#603F8B]">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <FontAwesomeIcon icon={faEye} className="text-[#A16AE8] relative z-50 bottom-8 left-44" />
             
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/forget-password" className="text-purple-600">Forgot password?</Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#532F82] text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <Link to="/signup" className="text-purple-600">Sign Up</Link>
        </p>
      </div>
    </div>
    <Footer/>
    
    </>
  
  );
};

export default Login;
