import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className='h-16 bg-black text-white flex justify-between items-center	px-8'>
            <div className='text-2xl font-bold'><Link to="/">My Fake Shop</Link></div>

            <div className='text-white w-10 h-10 md:hidden' onClick={() => setOpen(!open)}>
                {open ? <XIcon></XIcon> : <MenuIcon> </MenuIcon>}

            </div>

            <div className={`nav-links md:flex ${open ? 'top-14 absolute right-0 z-50 text-center h-full bg-black' : 'right-[-250px] hidden'}`}>
                <div onClick={() => setOpen(!open)} className='my-2'>
                    <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/home">Home</Link>
                </div>
                <div onClick={() => setOpen(!open)} className='my-2'>
                    <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/reviewcart">Review Cart</Link>
                </div>
                <div onClick={() => setOpen(!open)} className='my-2'>
                    <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/about">About</Link>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;