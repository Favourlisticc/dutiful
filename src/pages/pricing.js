// PricingTable.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/navbar"
import Footer from '../components/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PricingTable = () => {
  return (
  <>
  <Navbar />

    <div className="bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className='bg-white py-12'>
        <h2 className="text-3xl font-bold mb-4">Plans to Suit Your Business Budget</h2>
        <p className="text-gray-700 mb-8">
          Our fully organized plans deliver valuable content that showcases your services and skills, drives
          leads, covers all features, and gives customers a clear idea to be able to choose your services.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 bg-[#FCFAFF] h-full">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-left">Basic</h3>
            <p className="text-2xl font-bold mb-4 text-left">Free</p>
            <button className="bg-[#532F82] text-white py-2 px-4 rounded mb-4 w-full h-[68px]">Get started</button>
            <ul className="text-left space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Access to dashboard</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 2 businesses</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 2 products/services</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 2 images</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Unlimited keywords</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display service hours and prices</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display address, contact and email</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant chat</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Reviews and ratings</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Profile visibility</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant notifications</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display website and social network</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Quotes</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Bookmarks</li>
            </ul>
          </div>
          {/* Standard Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-left">Standard</h3>
            <p className="text-2xl font-bold mb-4 text-left">₦20,000 /year</p>
            <button className="bg-[#532F82] text-white py-2 px-4 rounded mb-4  w-full h-[68px]">Get started</button>
            <ul className="text-left space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Access to dashboard</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 6 businesses</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 6 products/services</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 4 images</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Unlimited keywords</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display service hours and prices</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display address, contact and email</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant chat</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Reviews and ratings</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Profile visibility</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant notifications</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display website and social network</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Quotes</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Bookmarks</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Number of profile views</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Verified badge (purple)</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Accept & Sell appointment</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Latest offers</li>
            </ul>
          </div>
          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-left">Premium</h3>
            <p className="text-2xl font-bold mb-4 text-left">₦30,000 /year</p>
            <button className="bg-[#532F82] text-white py-2 px-4 rounded mb-4  w-full h-[68px]">Get started</button>
            <ul className="text-left space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Access to dashboard</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 10 businesses</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 10 products/services</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Add up to 6 images</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Unlimited keywords</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display service hours and prices</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display address, contact and email</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant chat</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Reviews and ratings</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Profile visibility</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Instant notifications</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Display website and social network</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Quotes</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Bookmarks</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Number of profile views</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Verified badge (Gold)</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Accept & Sell appointment</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Latest offers</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> 24/7 service and support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
    <div className=" py-12 bg-[#FCFAFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-left">Features Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full  shadow-md rounded-lg">
            <thead>
              <tr className="">
                <th className="py-3 px-4"></th>
                <th className="py-3 px-4">Basic</th>
                <th className="py-3 px-4">Standard</th>
                <th className="py-3 px-4">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 text-left font-semibold">Features & Services</td>
                <td className="py-3 px-4">
                  <button className="bg-[#532F82] text-white h-[51px] py-2 px-4 rounded">Get started</button>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-[#532F82] text-white h-[51px] py-2 px-4 rounded">Get started</button>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-[#532F82] h-[51px] text-white py-2 px-4 rounded">Get started</button>
                </td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left bg-white">Access to dashboard</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">No. of business listings</td>
                <td className="py-3 px-4">2 businesses</td>
                <td className="py-3 px-4">6 businesses</td>
                <td className="py-3 px-4">10 businesses</td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">No. of products/services</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">6</td>
                <td className="py-3 px-4">10</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">No. of images</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">4</td>
                <td className="py-3 px-4">6</td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Keywords</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Display service hours & prices</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Display address, email & contact</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Instant chat</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Reviews & ratings</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Profile visibility</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Instant notifications</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Display website & social network</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Quotes</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Bookmarks</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Profile views</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Verified badge</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /> Purple</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /> Gold</td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">Latest offers</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left">Accept & sell appointment</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
              <tr className=' bg-white'>
                <td className="py-3 px-4 text-left">24/7 support</td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faTimes} className="text-gray-500" /></td>
                <td className="py-3 px-4"><FontAwesomeIcon icon={faCheck} className="text-purple-500" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>

    <Footer/>
  
  </>
  );
};

export default PricingTable;
