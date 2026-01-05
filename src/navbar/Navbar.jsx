import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaAlignRight } from 'react-icons/fa'
import './Navbar.css'

const links = [
    {id: 1, link: 'Inicio'},
    {id: 2, link: 'Sobre Mí'},
    {id: 3, link: 'Proyectos'},
    {id: 5, link: 'Contacto'},
]

export default function Navbar() {

const [nav, setNav] = useState(false);
const handleNav = () => { 
    setNav(!nav);
    };

  return (
    <div className="fixed w-full h-[80px] z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4">
            <div className={`flex items-center gap-3 cursor-pointer duration-500${nav ? 'opacity-0' : 'opacity-100'}`}>
                <img src="/carga-circular.svg" alt="Logo Carga Circular." className='w-8 h-8 md:w-12 md:h-12 object-cover text-accent'/>
                <h1 className='text-2xl md:text-4xl font-bold text-text-light font-signature'> Tomás Ruiz </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-accent duration-200'>
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className={nav ? 'fixed right-0 top-0 w-full h-full border-l border-l-gray-900 bg-primary ease-in-out duration-500' : 'fixed right-[-100%]'}>
                {links.map(({id, link}) => (
                    <li key={id} className='py-6 text-4xl capitalize' onClick={handleNav}>
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
                {nav ? <FaTimes className='text-accent w-8 h-8' /> : <img src="/FaBars.svg" alt="Icono Boton Hamburguesa" className='text-accent w-8 h-8'/>}
            </div>
        </div>
    </div>
  )
}