import React from 'react'
import { SectionWraper } from '../HOC'
import { styles } from '../styles'
import {motion, spring} from 'motion/react'
import { fadeIn, textVariant } from '../Utils/motion'
import { testimonials } from '../constants'

const TestimonialCard = ({index,testimonial,name,designation,company,image})=>{
  return(
    <>
      <motion.div variants={fadeIn('up','spring',index*0.5,0.75)} className='bg-black-200 w-full xs:w-[320px] rounded-2xl p-10! ' >
        <p className='text-[48px] text-white font-black' >"</p>
          <div className='mt-1!' >
            <p className='text-[18px] tracking-wider text-white ' >{testimonial}</p>
          <div className='mt-7! flex justify-between gap-1 items-center' >
            <div className='flex-1 flex flex-col' >
              <p><span className='blue-text-gradient' >@ </span>{name}</p>
              <p className='text-[12px] text-secondary mt-1! ' >{designation} of {company} </p>
          </div>
          <img src={image} alt={name+'feedback'} className='w-15 h-15 rounded-full' />
        </div>
          </div>
      </motion.div>
    </>
  )
}
const Feedbacks = () => {
  return (
    <div className='bg-black-100 mt-12! rounded-2xl ' >
      <div className='bg-tertiary px-6! sm:px-16! sm:py-16! py-10! min-h-[300px] rounded-2xl '>
        <motion.div variants={textVariant()} > 
          <p className={`${styles.sectionSubText}`} >What Other Say</p>
          <h3 className={`${styles.sectionHeadText}`} >Testimonials.</h3>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20! pb-14! flex flex-wrap gap-7  `} >
        {testimonials.map((item,index)=>(
          <TestimonialCard key={index} index={index} {...item} />
        ))}
      </div>

    </div>
  )
}

export default SectionWraper(Feedbacks,'feedbacks')