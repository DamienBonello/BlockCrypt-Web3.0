import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/icon.png';

import {Link} from 'react-router-dom'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )

}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial flex space-x-7'>
                <li className='hover:text-yellow-500'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-yellow-500'>
                    <Link to='/DEX'>DEX</Link>
                </li>
                <li className='hover:text-yellow-500'>
                    <Link to='/Portfolio'>myPortfolio</Link>
                </li>
                <li className='hover:text-yellow-500'>
                    <Link to='/Tutorials'>Tutorials</Link>
                </li>
                <li className='bg-yellow-600 py-2 px-5 mx-4 rounded-full cursor-pointer hover:bg-yellow-700'>
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in text-2xl'
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/DEX'>DEX</Link>
                        </li>
                        <li>
                            <Link to='/Portfolio'>myPortfolio</Link>
                        </li>
                        <li>
                            <Link to='/Tutorials'>Tutorials</Link>
                        </li>        
                    </ul>
                )}            
            </div>
        </nav>
    );
};

export default Navbar;
