import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { navs } from '@/data/Headerdata'; 

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav id='navbar' className={`navbar ${className}`}>
      <ul className="flex flex-col md:flex-row">
        {navs.map(nav => (
          <Link href={nav.link} className="py-2 px-4 hover: text-red no-underline font-stylish4">
          {nav.name}
        </Link>

        ))}
      </ul>
      <style jsx>{`
        .group:hover .hidden {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
