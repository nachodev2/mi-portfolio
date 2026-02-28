import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
import './Home.css'
import './Laptop.jsx'
import Laptop from './Laptop.jsx';
import TechStack from './TechStack.jsx';



export default function Home() {


  return (
    <section name="home" className='relative h-screen w-full bg-primary'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full h-full">
            <div className='flex flex-col justify-center'>
                <h2 className='font-bold text-6xl text-white  pl-64 -translate-y-14'>
                    Hello<span className="text-accent font-bold">.</span><br />
                </h2>
                <div className='flex items-center'>
                    <div className='w-64 h-1 bg-accent mr-6'></div>
                    <h2 className='ml-2 font-medium text-gray-400 text-5xl -translate-y-4'>I'm Tomás</h2>
                </div>
                <h2 className='font-bold text-7xl text-white  pl-64 translate-y-6'>
                    <TypeAnimation
                    sequence={[
                        'Software Dev',
                        1000,
                        'FullStack Dev',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex pl-64 translate-y-24'>
                    <Link to="contact" smooth={true} duration={500} className='bg-accent text-black font-bold group-hover:rotate-90 px-6 py-2 cursor-pointer hover:scale-105 hover:bg-accent-dark hover:text-white'>Got a Project?</Link>
                    <a href='#' target='_blank' rel='noopener noreferrer' className='bg-primary text-white font-bold group-hover:rotate-90 px-6 py-2 ml-8 border border-accent hover:scale-105 hover:text-accent'>My resume</a>
                </div>
            </div>
            <div 
            className='h-full w-full flex items-center justify-center relative z-10'style={{background: 'radial-gradient(circle at center, #FFB70340 0%, transparent 70%)'}}>
                <Laptop />
            </div>
        </div>
    </section>
  )
}


