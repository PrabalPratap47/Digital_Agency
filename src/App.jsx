import React, { useState,useRef, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero'
import { TrustedBy } from './Components/TrustedBy'
import  Services  from './Components/Services'
import  OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')     //So your app remembers the last selected theme (dark/light) from localStorage, and defaults to light if nothing is stored.                  
  

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Reference  for custom cursor position tracking
  const mouse = useRef({x: 0, y: 0});
  const position = useRef({x: 0, y: 0});

  useEffect(() => {
    const handelMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    }

    document.addEventListener('mousemove', handelMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1
    
      if(dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 16}px, ${position.current.y - 16}px, 0)`;
      }

      requestAnimationFrame(animate);
    }

    animate();
    return () => {
      document.removeEventListener('mousemove', handelMouseMove);
    }

  }, []);


  

  return (
     <div className='dark:bg-black relative'>  
      <Toaster/>
      <Navbar theme ={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>

    {/* Custom cursor ring */}
    <div ref={outlineRef} className='fixed top-0 left-0 w-8 h-8 rounded-full
                                     border border-primary pointer-events-none z-[9999]
                                     ' style={{transition: 'transform 0.1s ease-out'}}>
                                      </div>

    {/* Custom Cursor Dot */}
        <div ref={dotRef} className='fixed top-0 left-0 w-3 h-3 rounded-full
                        bg-primary pointer-events-none z-[9999]'>   </div>

    ``

    </div>
  )
}

export default App