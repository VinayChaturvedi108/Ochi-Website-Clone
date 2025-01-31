import React, { useEffect, useState } from 'react'

function PlayFull() {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener('mousemove', (pos)=>{
      let mouseX = pos.clientX;
      let mouseY = pos.clientY;

      let deltaX = mouseX-window.innerWidth/2;
      let deltaY = mouseY-window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  })
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div className="h-96 flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[-50%]">
              <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                  <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                    <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
                  </div>
                </div>
              </div>
              <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                  <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                    <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PlayFull
