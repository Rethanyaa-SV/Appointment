import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [ShowMenu,setShowMenu]=useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex items-start gap-10 font-medium text-lg'>
        <NavLink to={'/'}>
          <li className='flex flex-col items-center'>
            <span className='py-2'>HOME</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 hidden' />
          </li>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='flex flex-col items-center'>
            <span className='py-2'>ALL DOCTORS</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 hidden' />
          </li>
        </NavLink>
        <NavLink to='/about'>
          <li className='flex flex-col items-center'>
            <span className='py-2'>ABOUT</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 hidden' />
          </li>
        </NavLink>
        <NavLink to='/contact'>
          <li className='flex flex-col items-center'>
            <span className='py-2'>CONTACT</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 hidden' />
          </li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? 
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-12 rounded-full' src={assets.profile_pic} alt="" />
              <img src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-color-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 flex flex-col gap-4 p-4 '>
                  <p className='transition-transform duration-200 hover:scale-105 hover:text-gray-500 cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                  <p className='transition-transform duration-200 hover:scale-105 hover:text-gray-500 cursor-pointer' onClick={() => navigate('/my-appointments')}>My Appointments</p>
                  <p className='transition-transform duration-200 hover:scale-105 hover:text-gray-500 cursor-pointer' onClick={()=> setToken(false)}>Logout</p>
                </div>

              </div>
    
             </div>
          :
            <button  className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'> Create account</button>

        }
        
       
      </div>
    </div>
  );
};

export default Navbar;
