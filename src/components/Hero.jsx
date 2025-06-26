import React,{useState,useEffect} from 'react'
import {styles} from '..//styles'
import { Canvas } from '@react-three/fiber'
import { ComputersCanvas } from './canvas'
import Computers from './canvas/Computers'
import {motion} from 'motion/react'
import { mainImg } from '../assets'

const MobileMainImg =()=>{
  return(
    <div className=' absolute bottom-40  '>
      <img src={mainImg} className='' alt="" />
    </div>
  )
}
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  return (
    <section className='relative h-[100vh] w-full mx-auto  ' >
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-4!  sm:m-auto! items-start  flex gap-5  ${styles.paddingX}! `} >
        <div className='flex flex-col items-center' >
          <div className='bg-[#915eef] w-5 h-5 rounded-full ' ></div>
          <div className='w-1 h-40 sm:h-80 violet-gradient ' ></div>
        </div>
        <div>
          <p className={`${styles.heroHeadText}`} >HI, I'M   <span className='text-[#915eef]' >SARMAD ZIA</span></p>
          <p className={`${styles.heroSubText} mt-2! `} >
            I develop attracting user Interfaces <br /> and web applications.
          </p>
        </div>
      </div>
      {isMobile?<MobileMainImg/>:<ComputersCanvas/>}
      {/* <ComputersCanvas/> */}
      <div className='w-full bottom-18 xs:bottom-5 flex items-center justify-center absolute ' >
        <a href='#about' className=' rounded-3xl border-4 border-secondary w-[35px] h-[60px] p-2! flex justify-center items-start ' >
          <motion.div className='w-3 h-3 rounded-full bg-secondary mb-0.5!' animate={{y:[0,24,0]}} transition={{
            duration:1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }} >
          </motion.div>

        </a>
      </div>
    </section>
  )
}

export default Hero