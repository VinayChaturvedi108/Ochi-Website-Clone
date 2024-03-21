import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="1.5" className='w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <div className="w-[82vw] py-24 px-14">
            <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-none font-normal'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
        <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#95a75a]">
            <div className='w-1/2 px-14'>
              <h1 className='mb-5 mt-1 text-[3.4vw] font-normal'>Our approach:</h1>
              <button className='flex gap-9 items-center bg-zinc-900 text-white text-[1vw] uppercase font-medium py-5 px-6 rounded-full'>
                <span>Read More</span>
                <div className="w-2 h-2 bg-zinc-100 rounded-full">
                  {/* <GoArrowUpRight/> */}
                </div>
                </button>
            </div>
            <div className='w-[65%] h-[70vh] px-14'><img className='w-full rounded-[.8vw] bg-red-600 mt-4 mb-5' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt='couple image'></img></div>
        </div>
    </div>
  )
}

export default About
