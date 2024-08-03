import React, { useState } from 'react';
import Navbar from "../components/navbar"
import Footer from '../components/footer';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import message from "../public/Message.png"


function Forgetpassword() {

    const [emailSent, setEmailSent] = useState(false);
    const [otpScreen, setOtpScreen] = useState(false);
    const [resetPasswordScreen, setResetPasswordScreen] = useState(false);

  const handleSendEmail = (event) => {
    event.preventDefault();
    setEmailSent(true);
  };

  const handleNext = () => {
    setOtpScreen(true);
  };

  const handleConfirmOtp = () => {
    setResetPasswordScreen(true);
  };
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex pt-5 justify-center bg-gray-100">
    {!emailSent ? (
      <div className="p-8 w-full max-w-md">
        <Link to="/login">
        <button className="text-purple-700 mb-4 flex items-center justify-center h-7 border-2 rounded-full w-7 p-1 pr-1">
           <FontAwesomeIcon icon={faArrowLeft} className="" />
    
        </button>
        
        </Link>
        
        <h2 className="text-[36px] text-left font-[600] text-[#1E1E4B] mb-2">FORGOT PASSWORD</h2>
        <p className="text-gray-600 mb-4 text-left">
          ENTER YOUR EMAIL AND WE'LL SEND YOU A MAIL ON HOW TO RESET YOUR PASSWORD.
        </p>
        <form onSubmit={handleSendEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700">EMAIL</label>
           
            <img src={message}  className=" w-6 h-6 relative z-50 top-8 left-[350px] bg-white outline-purple-700" />
              <input
              type="email"
              className="w-full text-left font-[500] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
        
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white py-2 rounded">
            SEND EMAIL
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Or <a href="/login" className="text-purple-700">LOGIN</a>
        </p>
      </div>
       ) : !otpScreen ? (
        <div className="p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-[#F8F3FF] p-7 rounded-full">
          <FontAwesomeIcon icon={faEnvelope} className="text-purple-700 text-3xl" />
          <FontAwesomeIcon icon={faCheck} className="text-green-500 text-lg absolute right-0 bottom-0" />
         
          </div>
        </div>
        <p className="text-gray-700 mb-2">AN OTP CODE HAS BEEN SENT TO your email.</p>
        <p className="text-gray-600 mb-4">CHECK YOUR EMAIL TO GET THE CODE</p>
        <button onClick={handleNext} className="w-full bg-purple-700 text-white py-2 rounded">
          NEXT
        </button>
      </div>
       ) : !resetPasswordScreen ?(
        <div className=" p-8 w-full max-w-md text-center pt-28">
      
        <div className="flex justify-center space-x-2 mb-4">
          <input 
            type="text" 
            maxLength="1" 
            className="w-12 h-12 border-2 border-[#B6B6E5] rounded text-center text-2xl outline-none" 
          />
          <input 
            type="text" 
            maxLength="1" 
            className="w-12 h-12 border-2 border-[#B6B6E5] rounded text-center text-2xl outline-none" 
          />
          <input 
            type="text" 
            maxLength="1" 
            className="w-12 h-12 border-2 border-[#B6B6E5] rounded text-center text-2xl outline-none" 
          />
          <input 
            type="text" 
            maxLength="1" 
            className="w-12 h-12 border-2 border-[#B6B6E5] rounded text-center text-2xl outline-none" 
          />
        </div>

        <p className="text-[#686868] mb-5 mt-5">ENTER OTP CODE THAT WAS SENT TO YOUR EMAIL.</p>
        <button onClick={handleConfirmOtp} className="w-full bg-purple-700 text-white py-2 rounded">
          CONFIRM OTP
        </button>
        <p className="text-[#A3B1BF] mt-4">
          DIDN'T GET A CODE? <a href="/resend" className="text-purple-700">RESEND</a>
        </p>

      </div>
       ) : (
        <div className="p-8  w-full max-w-md text-center">
        <h2 className="text-[36px] font[600] text-[#1E1E4B] text-left mb-2">RESET PASSWORD</h2>
        <p className="text-[#686868] text-sm mb-9 text-left">SET YOUR NEW PASSWORD</p>
        <form>
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-left text-[#603F8B] mb-1">ENTER NEW PASSWORD</label>
           
              <input 
                type="password" 
                id="new-password" 
                className="w-full text-left font-[500] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter new password" 
                required
              />
              <FontAwesomeIcon icon={faEye} className="text-[#A16AE8] relative z-50 bottom-8 left-44" />
          
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-left text-[#603F8B] mb-1">RE-ENTER NEW PASSWORD</label>
            
           
               <input
              type="password" 
              id="confirm-password" 
              placeholder="Re-enter new password" 
              className="w-full text-left font-[500] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
              <FontAwesomeIcon icon={faEye} className="text-[#A16AE8]  relative z-50 bottom-8 left-44" />
            
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white py-2 rounded">
            RESET PASSWORD
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Or <a href="/create-account" className="text-[#603F8B]">CREATE NEW ACCOUNT</a>
        </p>
      </div>
    )}
  </div>
    <Footer/>
    </>
  );
}

export default Forgetpassword;
