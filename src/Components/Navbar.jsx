// import React from 'react'
import logo from '../assets/My-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
  return (
    
    <div className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/tanishk-agrawal-720535296/", "_blank", "noopener,noreferrer")} className='cursor-pointer'/>
            <FaGithub onClick={() => window.open("https://github.com/tani066", "_blank", "noopener,noreferrer")} className='cursor-pointer'/>
            <FaInstagram onClick={() => window.open("https://www.instagram.com/_tanishk_agrawal/?hl=en", "_blank", "noopener,noreferrer")} className='cursor-pointer'/>
            <MdOutlineMail onClick={() =>  window.location.href = "mailto:tanishk.agrawal2024@nst.rishihood.edu.in"} className='cursor-pointer text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar