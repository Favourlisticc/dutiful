import React from 'react';

import Navbar from "../components/navbar"
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import sms from "../public/New folder/sms-tracking.png"
import map from "../public/New folder/map.png"
import caller from "../public/New folder/call-calling.png"



function App() {
  return (
   <>
    <Navbar />
    <div className="min-h-screen w-full mb-10  flex flex-col items-center justify-center">
      <div className=" d w-full ">
        <div className="text-center mb-8 bg-[#532F82] w-full h-[200px]">
          <h1 className="text-2xl font-bold text-white pt-5">Get in touch</h1>
          <p className=" text-white">We are here to support you throughout the process of getting your business listed.</p>
        </div>
        <div className="flex justify-evenly mx-10 z-50 relative bottom-20 ">
          <div className="text-center w-[350px] rounded shadow-md bg-white py-3 ">
          <div className='flex justify-center items-center'>
            <img src={sms} className='h-8 w-8' />
            <p className="text-[#1E1E4B] font-[500] text-[24px]">Customer support</p>
          </div>
            <p className="text-gray-500 mt-8">Please fill out the form below</p>
          </div>
          <div className="text-center w-[350px] rounded shadow-md bg-white py-3">
           <div className='flex justify-center items-center'>
           <img src={map} className='h-8 w-8' />
           
           <p className="text-[#1E1E4B] font-[500] text-[24px]">Business address</p>
           </div>
            <p className="text-gray-500 mt-8">Suites (C13 & C14) Akord Shopping Mall,<br />Bogije, Elemoro, 100101,<br />Lagos, Nigeria</p>
          </div>
          <div className="text-center w-[350px] rounded shadow-md bg-white py-3">
            <div className='flex justify-center items-center'>
            <img src={caller} className='h-8 w-8' />
            
            <p className="text-[#1E1E4B] font-[500] text-[24px]">Phone number</p>
            </div>
            <p className="text-gray-500 mt-8">+234 903 921 6724</p>
          </div>
        </div>
        <form className="flex flex-col justify-center items-center">
         <div>
            <label className="block text-left font-[500] text-[#603F8B]">Full name</label>
            <input type="text" placeholder="Full name" className="mb-4 p-2 w-[390px] border border-gray-300 rounded" required />
         </div>

          <div>
          <label className="block text-left font-[500] text-[#603F8B]">Email</label>
          <input type="email" placeholder="Email" className="mb-4 p-2 border w-[390px] border-gray-300 rounded" required />
          </div>

          <div>
          <label className="block text-left font-[500] text-[#603F8B]">Business</label>
          <input type="text" placeholder="Business type (Optional)" className=" w-[390px] mb-4 p-2 border border-gray-300 rounded" />
          </div>
           
          <div>
          <label className="block text-left font-[500] text-[#603F8B]">Subject</label>
          <select className="mb-4 p-2 border w-[390px] border-gray-300 rounded" required>
            <option value="" disabled selected>Subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
          </div>

          <div>
            <label className="block text-left font-[500] text-[#603F8B]">Message</label>
            <textarea placeholder="Write your message" className="mb-4 p-2 w-[390px] border border-gray-300 rounded" required></textarea>
          </div>

          <button type="submit" className="bg-purple-700 w-[390px]  text-white p-2 rounded">Send message</button>
        </form>
      </div>
      
    </div>
    <Footer/>
   </>
  );
}

export default App;
