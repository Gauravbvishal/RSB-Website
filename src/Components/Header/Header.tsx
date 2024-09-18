'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; 
import Nav from './Nav';
import { useRouter } from 'next/navigation'; 

export default function Header() {
  const [on, setOn] = useState(false);
  const router = useRouter(); 

  const handleToggleMenu = () => {
    setOn(!on);
    let body: HTMLElement | any = document.querySelector('body');
    body.classList.toggle('mobile-nav-active');
  };

  const handleContactUsClick = () => {
    router.push('/ContactUs'); 
  };

  return (
    <header id="header" className='header d-flex align-items-center fixed-top mb-10'>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href='/' className='logo d-flex align-items-center'>
          <img src="/assets/img/rsb-logo.png" alt="Logo" style={{ maxWidth: '150px' }} />
        </a>
        <Nav className={on ? 'd-flex' : 'd-none d-md-flex'} />
        <button 
          className="custom-button btn btn-primary d-none d-md-block"
          onClick={handleContactUsClick} 
        >
          Contact Us
        </button>
        <button
          className="md:hidden p-2 text-white rounded-full bg-purple-600 hover:bg-purple-700"
          onClick={handleToggleMenu}
        >
          {on ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      
      <nav className={`mobile-nav d-md-none ${on ? 'd-block' : 'd-none'}`}>
        <Nav className='d-flex flex-column' />
        <button 
          className="flex items-center bg-purple-600 text-white rounded-full px-6 py-2 mt-2 transition duration-300 hover:bg-purple-700" 
          onClick={handleContactUsClick}
        >
          <FaPhone className="mr-2" />
        </button>
      </nav>
    </header>
  );
}
