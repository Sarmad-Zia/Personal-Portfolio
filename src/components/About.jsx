import React from 'react'
import {motion} from 'motion/react'
import { styles } from '../styles'
import {textVariant,fadeIn} from '../Utils/motion' 
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { SectionWraper } from '../HOC'

const ServiceCard = ({title,icon,index})=>{
  return(
    <>
      <Tilt className='xs:w-[250px] w-full '  >
        <motion.div variants={fadeIn('right','spring',0.5*index,0.75)} className='w-full green-pink-gradient p-[1px]! rounded-[20px] shadow-card' >
          <div className='w-full flex flex-col justify-evenly items-center bg-tertiary rounded-[20px] py-15! px-12! min-h-[250px] ' options={{
            scale: 1,
            max: 45,
            speed: 450 
          }} >
            <img src={icon} className='w-16 h-16 object-contain' alt="title" />
            <p className='text-white text-[20px] font-bold text-center ' >{title}</p>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >Introduction</p>
        <h1 className={styles.sectionHeadText} >Overview</h1>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1 )} className='mt-4! text-secondary text-[17px] max-w-3xl leading-[30px]! '>
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life! 
      </motion.p>
      <div className='flex flex-wrap gap-10 mt-20!' >
        {services.map((service,index)=>(
          <ServiceCard key={service.title} {...service } index={index}  />
        ))}
      </div>

    </>
  )
}

export default SectionWraper(About,'about')