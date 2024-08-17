import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 600, bounceDamping: 10}} className='flex-shrink-0 relative w-56 h-[17.5rem] rounded-[40px] bg-zinc-900/90 text-white p-7 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute w-full bottom-0 left-0'>
            <div className='flex items-center justify-between py-3 px-7 mb-1'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : <LuDownload size={".7em"} color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex justify-center items-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )}  
        </div>
    </motion.div>
  )
}

export default Card
