import React from 'react'
import { SectionWraper } from '../HOC'
import { textVariant } from '../Utils/motion'
import {motion} from 'motion/react'
import { styles } from '../styles'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import {experiences} from '../constants/index'
import { div } from 'motion/react-client'

const ExperienceCard = ({experience})=>{
  return(
    <VerticalTimelineElement 
    contentStyle={{background: '#1d1836',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object contain' />
    </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold ' >{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold m-0! ' >{experience.company_name}</p>
      </div>
      <ul className=' list-disc mt-5! ml-5! space-y-2  ' >
        {experience.points.map((point,index)=>(
          <li className='text-white text-[17px] pl-1! tracking-wider ' key={index} >
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  )

}

const Experience = () => {
  return (
    <>
      <motion.div variant={textVariant()} >
        <p className={`${styles.sectionSubText} text-center`} >What I have done so far</p>
        <h1 className={`${styles.sectionHeadText} text-center`} >Work Experience</h1>
      </motion.div>
      <div className='mt-20! flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWraper(Experience,'experience')