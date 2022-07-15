import React from 'react'
import Image from 'next/image'
import {BsFacebook,BsEnvelope,BsLinkedin} from "react-icons/bs"
function Footer() {
  return (
    <footer className="">
        <div className='bg-gray-900 text-white flex py-2 justify-center space-x-10 '>
            <div><a href="https://www.facebook.com/bracudichari" target="_blank"><BsFacebook className='h-7 w-7'/></a></div>
            <div><a href="mailto:dichari@bracu.ac.bd" ><BsEnvelope className='h-7 w-7'/></a></div>
            <div><a href="https://www.linkedin.com/company/bracudichari/" target="_blank"><BsLinkedin className='h-7 w-7'/></a></div>

        </div>
        <div className='flex flex-col h-16 w-full items-center justify-center border-t'>
          <a
            className="flex items-center justify-center gap-2 text-xl font-normal font-serif"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; Developed by BRACU DICHARI
          </a>
        </div>
    </footer>
  )
}

export default Footer