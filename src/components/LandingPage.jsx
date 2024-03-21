import { motion } from "framer-motion";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-40 px-14">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                    className="mr-[.8vw] w-[9vw] h-[4.6vw] rounded-md bg-red-500 mt-[.9vw]"
                  ></motion.div>
                )}
                <h1 className='uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-["Neue Montreal"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-lg uppercase rounded-full">
            start the project
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <RxArrowTopRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
