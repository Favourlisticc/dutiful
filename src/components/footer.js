// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#532F82] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32 mx-20">
          <div>
            <h5 className="font-bold mb-5 text-left">Company</h5>
            <ul className='text-left font-[450] text-[16px] text-[#B6B6E5]'>
             <a  href="#"> <li className='font-[450]'>About</li></a>
             <a  href="#"> <li>Contact us</li></a>
            < a  href="#">  <li>FAQs</li></a>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-5 text-left">Quick links</h5>
            <ul className='text-left font-[450] text-[16px] text-[#B6B6E5]'>
              <a  href="#"><li>Find services</li></a>
             < a  href="#"> <li>Pricing & plans</li></a>
              <a  href="#"><li>List your business</li></a>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-5 text-left">Resources</h5>
            <ul className='text-left font-[450] text-[16px] text-[#B6B6E5]'>
             <a  href="#"> <li>Blog</li></a>
             <a  href="#"> <li>Affiliate program</li></a>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-5 text-left">More from Dutiful</h5>
            <ul className='text-left font-[450] text-[16px] text-[#B6B6E5]'>
              <li>Dutiful jobs</li>
            </ul>
          </div>
         
        </div>
        <div className=" flex border-t border-[#63428E] mt-8 mx-20 justify-between py-5 h-10">
           <div className='flex'>
           <h5 className="font-bold mb-2">Follow us</h5>
            <div className="flex space-x-6 mb-4 ml-5 mt-1">
              <FontAwesomeIcon icon={faFacebook} size="2" />
              <FontAwesomeIcon icon={faInstagram} size="2" />
              <FontAwesomeIcon icon={faTwitter} size="2" />
              <FontAwesomeIcon icon={faYoutube} size="2" />
              <FontAwesomeIcon icon={faLinkedin} size="2" />
            </div>
           </div>
            <div className='flex'>
            <h5 className="font-bold mb-2">Download the app</h5>
                <div className="flex space-x-6 ml-3 mt-1">
                <FontAwesomeIcon icon={faApple} size="2" />
                <FontAwesomeIcon icon={faGooglePlay} size="2" />
                </div>
            </div>
           </div>
        <div className="border-t flex border-[#63428E] mt-10 pt-4 mx-20 h-10 text-left text-sm">
          <p>&copy; 2022 Dutiful®</p>
          <div className="flex space-x-4 ml-16">
            <a href="#" className='text-[#B6B6E5]'>Terms of Service</a>
            <a href="#" className='text-[#B6B6E5]'>Privacy policy</a>
            <a href="#" className='text-[#B6B6E5]'>Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
