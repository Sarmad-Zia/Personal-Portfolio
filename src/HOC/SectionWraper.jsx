import React from 'react'
import { styles } from '../styles'
import {motion} from 'motion/react'
import { staggerContainer } from '../Utils/motion'

const SectionWraper = (Componet,IdName) => {
  function HOC(){
    return(
        <>
            <motion.section className={`${styles.padding} relative z-0 mx-auto! max-w-7xl `} variants={staggerContainer()} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.25} } >
                <span className='hash-span' id={IdName}  >&nbsp;</span>
                <Componet/>
            </motion.section>
        </>
    )
  }
  return HOC
}

export default SectionWraper

