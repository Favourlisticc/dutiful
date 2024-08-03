import React from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer';
import first from "../public/Group 698.png"
import third from "../public//Frame 12 (1).png"

import firstimg from "../public/New folder (2)/Frame 723.png"
import calnder from "../public/New folder (2)/Calendar.png"
import last from "../public/New folder (2)/Frame 4995.png"
import roundedcolor from "../public/Ellipse 30 (1).png"


import firstimage from "../public/Group 696.png"
import secondimg from "../public/Group 697.png"
import thirdimg from "../public/Group 699.png"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='mx-20'>
        <div className='flex '>
            <div className='mt-20 '>
              <h1 className='] font-[600] text-[36px] text-left'>
              List and grow your business 
              with just few clicks
              </h1>
              <p className='text-left'>Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.</p>
            </div>

            <div className='ml-5'>
             <img src={first} />

             
            </div>
        </div>

        <div className='flex justify-between mt-8'>
            <div className='w-1/2'>
              <img src={roundedcolor} />
              <img src={firstimage} className='w-[250px] absolute z-50 -bottom-52 left-32' />

             <img src={secondimg} className='w-[250px] absolute z-50 -bottom-80 left-80'/>

             <img src={thirdimg} className='w-[250px] absolute z-50 -bottom-[430px] left-32' />
            </div>

            <div className='w-1/2 mt-20'>
                <h1 className=' font-[600] text-[36px] text-left'>Collect reviews and ratings from customers</h1>
                <p className=' text-[#656565] font-[450] text-[20px] text-left'>Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
            </div>
        </div>


        <div>
            <img src={third} />
        </div>

        <div className='flex  mt-20'>
            <div className='flex w-1/2 '>
                <div>
                    <img src={firstimg} />
                    <img src={calnder} />
                </div>
                <div>
                    <img src={last} />
                </div>
            </div>

            <div className='ml-20 w-1/2'>
                <h1 className=' font-[600] text-[36px] text-left'>Accept and sell appointments</h1>
                <p className='text-left'>Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. </p>
            </div>

        </div>
    </div>
      <Footer/>

    </>
  
  )
}

export default Home