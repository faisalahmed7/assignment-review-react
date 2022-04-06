import React from 'react';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';


const Header = () => {
    return (
        <nav className='flex justify-center items-center mt-8 p-6 font-sans text-xl '>
            <CustomActiveLink to='/'>Home</CustomActiveLink>
            <CustomActiveLink to='/reviews'>Review</CustomActiveLink>
            <CustomActiveLink to='/dashboard'>Dashboard</CustomActiveLink>
            <CustomActiveLink to='/blogs'>Blogs</CustomActiveLink>
            <CustomActiveLink to='/about'>About</CustomActiveLink>
        </nav>
    );
};

export default Header;