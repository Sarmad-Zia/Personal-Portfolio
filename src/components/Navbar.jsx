import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { close, Logo, menu } from '../assets'
import {navLinks} from '../constants/index'
const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggel]=useState(false)
  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
    const scrolltop = window.scrollY
    if(scrolltop>100){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
    };
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[])
  return (

    <nav className={`w-[100%] flex items-center top-0 z-20 py-4! fixed! ${scrolled?'bg-[#050816]!':'bg-transparent'} `}  >
      <div className=' flex items-center w-full justify-between sm:justify-around max-w-8xl mx-auto ' >
        <Link to='/' onClick={()=>{setActive(''); window.scrollTo(0,0)}} className='flex items-center gap-2' >
          <img src={Logo} className='w-10 h-10 object-contain' alt="" />
          <p className='text-xl font-semibold' >Sarmad Zia <span className='max-sm:hidden' >| Front-End Developer</span></p> 
        </Link>
        <ul className='hidden sm:flex flex-row  list-none gap-12' >
          {navLinks.map((linnk,index)=>
            <li key={index} className={`${active==linnk.id?'text-white' : 'text-secondary'} hover:text-white text-[20px] font-medium  `} onClick={()=>setActive(linnk.title)} >
              <a href={`#${linnk.id}`}  >{linnk.title}</a>
            </li>
          )}
        </ul>
      </div>
      <div className='sm:hidden pr-4!' >
        <img src={toggle?close:menu} className='w-[20px] h-[20px]' alt="" onClick={()=>setToggel(!toggle)} />
        <div className={`${!toggle?'hidden':'flex'} flex-col gap-4 items-start justify-end black-gradient max-w-[140px] p-6! top-20 right-2 rounded-xl  absolute  `} >
           <ul className='list-none gap-12' >
          {navLinks.map((linnk,index)=>
            <li key={index} className={`${active==linnk.id?'text-white' : 'text-secondary'} active:text-white sm:hover:text-white  text-[20px] font-medium  `} onClick={()=>setActive(linnk.title)} >
              <a href={`#${linnk.id}`}  >{linnk.title}</a>
            </li>
          )}
        </ul>
        </div> 
      </div>
    </nav>
  )
}

export default Navbar
