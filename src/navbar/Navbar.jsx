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
    <div className="fixed w-full h-[80px] bg-slate-900 text-white z-50">
        <div className='nav-content'>
            <div className='logo'> Mi Portfolio </div>
            <ul className='nav-links'>
                {links.map(({id, link}) => (
                    <li key={id} className='nav-link'>
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