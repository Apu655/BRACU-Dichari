import Link from 'next/link'
import { useEffect, useState } from 'react'
import {MenuIcon} from '@heroicons/react/outline'

interface Props{
    scroll: boolean
}
export default function Navbar({scroll}:Props) {
    const [isScrollY,setIsScrollY] = useState(false)
    const [isMenuOpen,setIsMenuOpen] = useState(false)


    useEffect(()=>{
        if (scroll===true){
        window.addEventListener("scroll",()=>{
            //console.log(window.scrollY)
            if (window.innerWidth>1248){
                if (window.scrollY>140){
                    setIsScrollY(true)
                    //console.log(isScrollY)
                }
                else{
                    setIsScrollY(false)
                    //console.log(isScrollY)
                }
            }
            else{
                if (window.scrollY>90){
                    setIsScrollY(true)
                    //console.log(isScrollY)
                }
                else{
                    setIsScrollY(false)
                    //console.log(isScrollY)
                }
            }
        })}
        else{
            setIsScrollY(true)
        }
        
    },[])
    
  return (
    <nav className={`navbar rounded shadow-2xl ${isScrollY?"bg-black py-2 bg-opacity-90":"bg-transparent scale-y-0 origin-top"} w-full fixed top-0 z-50 transition-all  duration-700 lg:px-4`}>
        <div className="hidden lg:flex font-serif lg:max-w-7xl lg:mx-auto justify-between py-2 mx-2 ">
            <div className={`font-bold text-xl text-white`}>DICHARI</div>
            <div className="space-x-10 text-lg text-gray-300 relative">

                    <Link href='/'>
                    <a href="#" className='relative hover:bg-blue-800 p-2 rounded group text-md  hover:text-white transition-all duration-300 '>
                        Home
                        
                    </a>
                    </Link>
                    <Link href='#2'>
                    <a href="#" className='group relative hover:bg-blue-800 p-2 rounded text-md hover:text-white transition-all duration-300 '>
                        Updates
                        
                    </a>
                    </Link>

                    <Link href='/contact'>
                    <a href="#" className='group relative hover:bg-blue-800 p-2 rounded text-md hover:text-white transition-all duration-300'>
                        Contact Us
                       
                    </a>
                    </Link>
                    <Link href='#'>
                    <a href="#" className='group relative hover:bg-blue-800 p-2 rounded text-md hover:text-white transition-all duration-300'>
                        Sponsors
                        
                    </a>
                    </Link>


                    {/* <Link href="#">
                    <a href="#" className='group relative text-md hover:text-white transition-all duration-300 '>
                        Sponsors
                        <div className=' absolute h-1 w-[0%] group-hover:w-[100%] bg-sky-500 transition-all'></div>
                    </a>
                    </Link> */}
                    {/* <Link href="/"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">HOME</a></Link>
                    <Link href="/skills"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">SKILLS</a></Link>
                    <Link href="#"><a href="#" className="hover:text-black hover:bg-teal-400 hover:rounded-3xl transition-all duration-50 ease-linear p-2">ABOUT</a></Link>
                 */}
            </div>
        </div>
        <div className='lg:hidden flex flex-col px-[2%] py-1 text-white'>
                 <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><MenuIcon className='h-10 w-10 '/></button>
                 <div className={`${isMenuOpen?"flex-inline scale-y-100":"hidden"} flex flex-col space-y-5 pt-3 px-2 text-2xl transition-all`}>
                    <Link href='/'>
                        <a href="#" className='relative group text-md  hover:text-white transition-all duration-300 '>
                            Home
                            
                        </a>
                        </Link>
                        <Link href='#1'>
                        <a href="#" className='group relative text-md hover:text-white transition-all duration-300 '>
                            Updates
                        </a>
                        </Link>

                        <Link href='/contact'>
                        <a href="#" className='group relative text-md hover:text-white transition-all duration-300'>
                            Contact Us
                    
                        </a>
                        </Link>
                        <Link href='#'>
                        <a href="#" className='group relative text-md hover:text-white transition-all duration-300'>
                            Sponsors
                        </a>
                        </Link>

                </div>



        </div>
    </nav>
  )
}
