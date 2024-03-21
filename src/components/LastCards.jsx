import React from "react";

function LastCards() {
  return (
    <div className="w-full bg-zinc-900 py-10 px-14 flex">
      <div className="cardcontainer w-1/2 mr-4">
        <div className="relative card w-full h-96 bg-[#004D43] rounded-xl">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-[4vw] w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="ochi"
            ></img>
          </div>
          <div className="absolute bottom-8 left-8 text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-full">
            <button className="py-1 px-3">&copy;2019-2022</button>
          </div>
        </div>
      </div>
      <div className="cardcontainer2 w-1/2 flex">
        <div className="relative card2 w-1/2 h-96 bg-[#212121] rounded-xl mr-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-[5vw] w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="clutch"
            ></img>
          </div>
          <div className="absolute bottom-8 left-8 text-[#F4F4F4] border-[1px] border-[#F4F4F4] rounded-full">
            <button className="py-1 px-3 uppercase">Rating 5.0 on Clutch</button>
          </div>
        </div>
        <div className=" relative card2 w-1/2 h-96 bg-[#212121] rounded-xl">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-[8vw] w-[8vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="logo3"
            ></img>
          </div>
          <div className="absolute bottom-8 left-8 text-[#F4F4F4] border-[1px] border-[#F4F4F4] rounded-full">
            <button className="py-1 px-3 uppercase">Business Bootcamp Alumni</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCards;
