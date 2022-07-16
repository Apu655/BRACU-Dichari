import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card"
import { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import Footer from '../components/Footer'





const Home: NextPage = () => {

  const [isAnimate,setIsAnimate] = useState({anime_1:false,anime_2:false})
  const [isMobile,setIsMobile] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      console.log(isAnimate)
      if (window.scrollY>1000){
        console.log(window.scrollY)
        setIsAnimate(prevState=> {
          return {...prevState, anime_2:true}
        })
      }
    })
  },[])
  return (
    
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Loading screen start */}
      
      <div className=''>
        <Navbar scroll={true}/>
        
        <div className="curve">
        
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
    
        </div>

        
      <section id="1" className='scroll-smooth'>
          <main className="min-h-[526px]">


            <div className='flex lg:justify-evenly justify-center items-center lg:flex-row flex-col lg:h-[400px] h-[500px]'>
              <motion.div 
              initial={{x:-400}}
              animate={{x:0}}
              className='flex flex-col items-center'>
                {/* <p className='font-bold text-xl'>Welcome</p>
                <h1 className='text-4xl font-extrabold'>BRACU DICHARI</h1> */}
                
                <h3 className='font-serif text-blue-500 text-3xl font-semibold lg:font-normal dichari-text lg:text-6xl'>BRACU DICHARI</h3>

                {/* <img className='object-contain h-[400px]' src="BRACU DICHARI.gif"/> */}
              </motion.div>
              <motion.div 
              initial={{x:500}}
              animate={{x:0}}
              className=''><img className='dichari-logo object-contain hover:object-scale-down h-full w-96 animate-pulse hover:scale-125 transition-all duration-300 ease-in' src= "Dichari Official Logo.png"/> </motion.div>
              
            </div>
            </main>
        </section>
        <section id="2" className='scroll-smooth px-10 lg:px-0 lg:max-w-7xl mx-auto pt-10 lg:pt-24'>
        <div className='flex items-center flex-col pt-10 lg:pt-5 text-black '>
            <h3 className='text-4xl font-bold text-black'>What are we?</h3>
            <p className='text-center text-md font-light'>BRACU DICHARI is BRAC University's rescue rover, drone, and 3D mapping research team. The team operates both on the ground and in the air. This is the only team at BRAC University working on both UGV and UAV development. We are conducting research with the goal of addressing real-world problems and challenges. Students of various departments, genders, and ages are actively learning here. </p>
            
          </div>
        {/* Carousel */}

    <Swiper
        
        breakpoints={{
         640: {
           slidesPerView: 2,
           spaceBetween: 20,
           
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 30,
         },
         1280: {
           slidesPerView: 3,
           spaceBetween: 20,
           centeredSlides: true,
         },
         1440: {
           slidesPerView: 3,
           spaceBetween: 40,
         },
       }}
    
    pagination={{
     clickable: true,
    }}
    navigation={true}
    autoHeight={true}
    
    
    
    modules={[Pagination, Navigation]}
    className="mySwiper w-full !py-[70px] "
    >
    <SwiperSlide> <Card title="European League" description="Team Dichari is the only team from Bangladesh that has advanced to the final round of the European Robotics League" image="Team 1.jpeg" /></SwiperSlide>
    <SwiperSlide><Card title="Perseverance Award" description="BracU Dichari has been awarded the “Perseverance Award” for reaching the championship stage of the ERL tournament facing many adversities" image="Preservence award.jpeg"/></SwiperSlide>
    <SwiperSlide><Card title="Dichari in EU" description="European Union in Bangladesh on May 30th, 2022 has invited Team BRACU Dichari for participating (ERL), His Excellency Charles Whiteley, Ambassador to the Delegation of the European Union in Bangladesh, expressed interest in our project." image="Dicarhi in EU.jpeg" /></SwiperSlide>
    </Swiper>
      
      
            
            
          

        </section>
        <section className='bg-sky-500 min-h-screen text-white '>
          {/* Curve Design */}
          
          <div className=''>
              <div className="custom-shape-divider-bottom-1655468635">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
              </div>
          </div>
          {/*  */}

                {/* Dichari Description */}
          <div className='lg:max-w-7xl mx-auto px-6'>
          
          <div className='flex lg:px-0 lg:flex-row flex-col-reverse lg:space-x-5 pb-7'>
                <div  className='overflow-hidden lg:w-[50%] border-4 flex-inline shadow-xl rounded mx-auto lg:mx-0'>
              <img className=" mx-auto hover:scale-110 w-full h-full lg:py-0 px-0 rounded-md   transition-all ease-out duration-300"src="dichari_rover.jpg"/>
              </div>
              <div className='lg:w-[50%]'>
                <h3 className='text-4xl text-center text-white'>OUR ROVER (UGV) </h3>
                <ul className='text-center pl-10 px-5 lg:px-0 py-5 space-y-3 lg:space-y-0'>
                  <li className='lg:py-2'>Robotic-arm of 6 Degrees of Freedom (DOF). It is used in presided unmanned works like bomb disposing of, high voltage circuit managements.</li>
                  <li className='lg:py-2'>Inverse Kinematics in arms control. It can be used in precision handling operation such as operation theater or bomb disposal</li>
                  <li className='lg:py-2'>Redesigned dual chained wheel</li>
                  <li className='lg:py-2'>Autonomous navigation following vision-based directions</li>
                  <li className='lg:py-2'>GPS based pathway navigation</li>
                </ul>
              </div>

              </div>

              <div className='flex lg:px-0 lg:flex-row-reverse flex-col-reverse pb-7'>
                <div  className='overflow-hidden lg:w-[50%] border-4 flex-inline shadow-xl rounded mx-auto'>
              <img className="hover:scale-110 w-full h-full lg:py-0 px-0 rounded-md transition-all ease-out duration-300"src="dichari_rover.jpg"/>
              </div>
              <div className='lg:w-[50%]'>
                <h3 className='text-4xl text-center'>OUR DRONE </h3>
                <ul className='text-center'>
                  <li className='lg:py-2'>Accurate Indoor Positioning without GPS.Helps drone to stabilize in the indoor area and accurate navigation</li>
                  <li className='lg:py-2'>Lidar based 3D mapping of rescue site</li>
                  <li className='lg:py-2'>Vision-based coastal area monitoring</li>
                  <li className='lg:py-2'>Real-time pollution feedback by colorimetric analysis</li>
                  <li className='lg:py-2'>Photogrammetric surveying</li>
                </ul>
              </div>

              </div>
          </div>
        </section>
        <Footer/>
        
      </div>
      
    </div>
  )
}

export default Home
