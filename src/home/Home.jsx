import { useState, useEffect } from 'react'
import './Home.css'
import { div } from 'three/tsl'


export default function Home() {


  return (
    <section name="home" className='h-screen w-full bg-primary'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full h-full">
            <div className='flex flex-col justify-center'>
                <h2 className='font-bold text-6xl text-white  pl-64 -translate-y-24'>
                    Hello<span className="text-accent font-bold">.</span><br />
                </h2>
                <div className='flex items-center'>
                    <div className='w-64 h-1 bg-accent mr-6'></div>
                    <h2 className='ml-2 font-medium text-gray-400 text-5xl -translate-y-4'>I'm Tomás</h2>
                </div>
                <h2 className='font-bold text-7xl text-white  pl-64 translate-y-24'>
                    Software Developer
                </h2>
            </div>
        </div>
    </section>
  )
}