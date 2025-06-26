import React from 'react'
import { motion } from 'motion/react'
import { textVariant,fadeIn } from '../Utils/motion'
import { styles } from '../styles'
import { SectionWraper } from '../HOC'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github } from '../assets'


const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div  variants={fadeIn('up','spring',index*0.5,0.75)} >
      <Tilt className='w-full sm:w-[360px] bg-tertiary rounded-2xl p-5! '
      options={{
        speed: 450,
        scale: 1,
        max: 45,
      }}
      >
        <div className= ' w-full relative h-[260px]' >
          <img src={image} alt={name} className='object-cover rounded-2xl w-full h-full ' />
          <div className='flex justify-end m-3! inset-0 absolute '>
            <div onClick={()=>window.open(source_code_link,'blank')}
            className='black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer '
            >
              <img src={github}  alt='Source Code' title='Source Code'  />
            </div>
          </div>
        </div>
        <div className='mt-5!'>
          <p className='text-[24px] text-white font-bold ' >{name}</p>
          <p className='text-[14px] text-secondary mt-2! ' >{description}</p>
          <div className='flex gap-2 flex-wrap mt-4!' >
            {tags.map((tag,index)=>(
              <p key={`${name}-${tag.name}`} className={`${tag.color} text-[14px] `} >#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
              <p className={`${styles.sectionSubText} `} >My Work</p>
              <h1 className={`${styles.sectionHeadText} `} >Projects </h1>
      </motion.div>
      <motion.p variants={fadeIn('up','spring',0.1,1)} className='text-secondary mt-10! leading-[30px] text-[17px] max-w-3xl' >
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
      <div className='flex flex-wrap mt-20! gap-7   ' >
        {projects.map((project,index)=>(
          <ProjectCard key={index} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWraper(Works,'work')