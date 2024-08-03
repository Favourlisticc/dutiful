import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { faEye, faUser, faStore, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
  const [userType, setUserType] = useState('regular');

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="p-8 w-full max-w-md">
          <p className='text-left font-extralight'>Sign up for free!</p>
          <h2 className="text-left text-[36px] font-[600] text-[#1E1E4B] mb-4">Get started</h2>
          <div className="flex mb-4">
            <button
              onClick={() => setUserType('regular')}
              className={`relative flex items-center px-4 py-2 border mr-5 ${userType === 'regular' ? 'border-purple-600 text-purple-600' : 'border-gray-300 text-gray-300'} rounded-lg`}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Regular user
              {userType === 'regular' && (
                <FontAwesomeIcon icon={faCheck} className="absolute text-sm top-0 right-0 -mt-2 -mr-2 text-white bg-purple-600 rounded-full p-1" />
              )}
            </button>
            <button
              onClick={() => setUserType('provider')}
              className={`relative flex items-center px-4 py-2 border ${userType === 'provider' ? 'border-purple-600 text-purple-600' : 'border-gray-300 text-gray-300'} rounded-lg`}
            >
              <FontAwesomeIcon icon={faStore} className="mr-2" />
              Service provider
              {userType === 'provider' && (
                <FontAwesomeIcon icon={faCheck} className="absolute text-sm top-0 right-0 -mt-2 -mr-2 text-white bg-purple-600 rounded-full p-1" />
              )}
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-left font-[500] text-[#603F8B]">Full name</label>
              <input
                type="text"
                className="w-full text-left font-[500] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-left font-[500] text-[#603F8B]">Email</label>
              <input
                type="email"
                className="w-full text-left font-[500] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-left font-[500] text-[#603F8B]">Phone number</label>
              <input
                type="tel"
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
                <FontAwesomeIcon icon={faEye} className="text-[#A16AE8] absolute top-2 right-4" />
              </div>
            </div>
            <div>
              <label className="block text-left font-[500] text-[#603F8B]">Re-enter password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <FontAwesomeIcon icon={faEye} className="text-[#A16AE8] absolute top-2 right-4" />
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" required />
              <label className="ml-2 block text-sm text-gray-900">
                I agree to Dutiful's <a href="#" className="text-purple-600">terms and conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#532F82] text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <Link to="/login" className="text-[#603F8B] font-[500]">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
