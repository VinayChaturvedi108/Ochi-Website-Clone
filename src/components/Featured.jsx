import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
    const [showCard1, setShowCard1] = useState(false);
    const [showCard2, setShowCard2] = useState(false);

    return (
        <div className='w-full py-10'>
            <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div className="px-14 relative">
                <div className="cards w-full flex gap-9 mt-10">
                    <div className="cardcontainer w-1/2 h-[75vh]" onMouseEnter={() => setShowCard1(true)} onMouseLeave={() => setShowCard1(false)}>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='card Image 1'></img>
                        </div>
                    </div>
                    <div className="cardcontainer w-1/2 h-[75vh]" onMouseEnter={() => setShowCard2(true)} onMouseLeave={() => setShowCard2(false)}>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='card Image 2'></img>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {showCard1 && (
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className='absolute text-[#CDEA68] font-black leading-none tracking-tight top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] font-["Neue_Montreal"] text-7xl'>
                            FYDE
                        </motion.h1>
                    )}
                    {showCard2 && (
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className='absolute text-[#CDEA68] font-black leading-none tracking-tight top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] font-["Neue_Montreal"] text-7xl'>
                            VISE
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Featured;
