import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { motion } from 'framer-motion'

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate : {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:'reverse',

        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVarients(2.5)}
            initial = 'initial'
            animate = 'animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div
            variants={iconVarients(3)}
            initial = 'initial'
            animate = 'animate'
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div
            variants={iconVarients(5)}
            initial = 'initial'
            animate = 'animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-300' />
            </motion.div>
            <motion.div
            variants={iconVarients(2)}
            initial = 'initial'
            animate = 'animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div
            variants={iconVarients(6)}
            initial = 'initial'
            animate = 'animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-7xl text-blue-300' />
            </motion.div>
            <motion.div
            variants={iconVarients(4)}
            initial = 'initial'
            animate = 'animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandTailwind className='text-7xl text-blue-600' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies