// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
   
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:100,bounceDamping:210}}
    className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
         <FaFileAlt/>
            <p className='text-sm leading-none mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full  left-0'>
                <div className="flex items-center justify-between mb-3  px-8 py-3">
                <h5>{data.filesize}</h5>
                    <span className="bg-sky-200  bg-zinc-600 w-7 h-7 rounded-full items-center flex justify-center">
                    {data.close ?<IoClose />:<FaDownload size=".7em" color='#fff'/>}
                    
                    </span>             
                </div>

                {data.tag.isOpen &&
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex justify-center item-center`}>
                    <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                </div>
                
                }
                

            </div>
        </motion.div>
  )
}

export default Card
