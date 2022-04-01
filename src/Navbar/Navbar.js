import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='h-16 bg-black text-white flex justify-between items-center	px-12'>
            <div className='text-2xl font-bold'><Link to="/">My Fake Shop</Link></div>
            <div className='nav-links'>
                <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/home">Home</Link>
                <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/reviewcart">Review Cart</Link>
                <Link className='mx-4 px-4 rounded font-medium py-2 text-lg' to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;