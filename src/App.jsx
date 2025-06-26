import { HashRouter } from "react-router-dom";
// import './index.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect, useRef } from "react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const AlertRef = useRef(false)
//   useEffect(()=>{
//     if(!AlertRef.current){
//     alert("Welcome! This portfolio highlights core React projects. Experience & Testimonials sections feature dummy content. I am an aspiring front-end developer skilled in JS, React, and other UI libraries."

// )
//     }
//     AlertRef.current= true;
//   },[])
useEffect(()=>{

  toast.info('Project Contain Dummy Experience and Testimonials')
},[])
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-[url("./assets/herobg.png")]  bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
