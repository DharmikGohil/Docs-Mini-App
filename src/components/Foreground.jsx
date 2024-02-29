// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../components/Card'
import { motion } from "framer-motion"
import  { useRef } from 'react';



const data=[
    //description, filesize, closeOrDownload, tagdetails

    {
        desc:"lorem ipsum dolor sit amet, consectetur",
        filesize:".9mb",
        close:"true",
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"green"

        }
    },

    {
        desc:"lorem ipsum dolor sit amet, consectetur",
        filesize:".9mb",
        close:"true",
        tag:{
            isOpen:false,
            tagTitle:"Download Now",
            tagColor:"green"

        }
    },

     {
        desc:"lorem ipsum dolor sit amet, consectetur",
        filesize:".9mb",
        close:"true",
        tag:{
            isOpen:true,
            tagTitle:"Upload Now",
            tagColor:"blue"

        }
    }
]

function Foreground() {

    // const ref = useRef(null);
    const ref = useRef(null);
  return (
    <>
    
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-10">
        {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
        ))}
    </div>
    </>
  )
}

export default Foreground
