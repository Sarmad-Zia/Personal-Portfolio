import React, { useState } from 'react'
import { slideIn } from '../Utils/motion'
import { styles } from '../styles'
import {motion} from 'motion/react'
import { SectionWraper } from '../HOC'
// import Earth from './canvas/Earth'
import { EarthCanvas } from './canvas'
import { useFormik } from 'formik'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading,setloading] = useState(false)

  const onSubmit = async (values,{resetForm, setSubmitting})=>{
    setloading(true)
    try{
      await emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,{
          from_name: values.name,
          to_name: 'Sarmad Zia',
          from_email: values.email,
          to_email: 'sarmadzia565@gmail.com',
          message: values.message,
          name: values.name, // Ensure this matches your template placeholder exactly for the table
          time: new Date().toLocaleString()
        },import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
        setloading(false)
        alert("Thank you. I will get back to you as soon as possible.");
        resetForm()
    }catch (error) {
      console.log(error)
      setloading(false)
      alert('Something Wrong happen');
    } finally{
      setSubmitting(false)
    }
    
    

  };
  const Formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      message:''
    },
    onSubmit
  })
  return (
    <div className='flex xl:flex-row flex-col-reverse xl:mt-12! gap-10! overflow-hidden' >
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8! rounded-2xl '  >
        <p className={`${styles.sectionSubText}`} >Get in Touch</p>
        <p className={`${styles.sectionHeadText}`} >CONTACT.</p>

      <form onSubmit={Formik.handleSubmit} className='flex flex-col mt-10! gap-8'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4!' >Your Name</span>
          <input type="text" value={Formik.values.name} onChange={Formik.handleChange} required name='name' placeholder="What's your Good Name" className='bg-tertiary placeholder:text-secondary outline-none font-medium rounded-lg border-none px-4! py-6!' />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4!' >Your Email</span>
          <input type="text" name='email' value={Formik.values.email} onChange={Formik.handleChange} required placeholder="Enter you email" className='bg-tertiary placeholder:text-secondary outline-none font-medium rounded-lg border-none px-4! py-6!' />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4!' >Your Message</span>
          <textarea cols={5} rows={5} name='message' value={Formik.values.message} onChange={Formik.handleChange} placeholder="What is you message" className='bg-tertiary placeholder:text-secondary outline-none font-medium rounded-lg border-none px-4! py-6!' />
        </label>
        <button type='submit'  className='bg-tertiary px-6! py-4! font-bold text-[1.2rem] w-fit rounded-2xl shadow-md shadow-primary '  >
          {loading?"Sending...":'Send'}
        </button>
      </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWraper(Contact,'contact')