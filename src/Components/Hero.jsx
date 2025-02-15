// import React from 'react'
import { HERO_CONTENT } from "../constants"
import image from '../assets/bgp.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
   hidden:{x:-100 , opacity:0},
   visible : {
    x:0,
    opacity:1,
    transition:{duration:0.5 , delay:delay}
   }

})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Tanishk Agrawal</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl tracking-tight text-transparent bg-clip-text">Frontend Developer</motion.span>

                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight"> {HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 mt-30 ">
                <div className="flex justify-center mt-[-120px]">
                    <motion.img 
                    className="rounded-2xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-[400px]"
                    // height={100}
                    width={400}
                    initial = {{x:100 , opacity:0}}
                    animate = {{x:0 , opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero