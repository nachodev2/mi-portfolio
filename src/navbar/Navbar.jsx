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
    <div className="fixed w-full h-[80px] bg-primary text-white z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4">
            <div className="flex items-center gap-3 cursor-pointer">
                <img src="/carga-circular.svg" alt="Logo Carga Circular." className='w-12 h-12 object-cover'/>
                <h1 className='text-4xl font-bold text-text-main font-signature'> Tomás Ruiz </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-white duration-200'>
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}