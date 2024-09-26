'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; 
import Nav from './Nav';   
import { useRouter } from 'next/navigation'; 

const Header: React.FC = () => {
  const [on, setOn] = useState(false);
  const router = useRouter(); 

  const handleToggleMenu = () => {
    setOn(prev => !prev);
    const body = document.querySelector('body') as HTMLBodyElement | null;
    if (body) {
      body.classList.toggle('mobile-nav-active');
    }
  };



  return (
    <header id="header" className='header d-flex align-items-center fixed-top mb-10'>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href='/' className='logo d-flex align-items-center'>
          <img src="/assets/img/rsb-logo.png" alt="Logo" style={{ maxWidth: '150px' }} />
        </a>
        <Nav className={on ? 'd-flex' : 'd-none d-md-flex'} />
        <button
          className="md:hidden p-2 text-white rounded-full bg-purple-600 hover:bg-purple-700"
          onClick={handleToggleMenu}
        >
          {on ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
