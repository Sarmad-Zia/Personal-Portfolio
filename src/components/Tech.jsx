import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWraper } from '../HOC'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technology,index)=>(
        <div key={index} className='w-28 h-28' >
        <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWraper(Tech,'tech')