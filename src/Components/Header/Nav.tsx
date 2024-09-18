import React from 'react';
import { navs } from '@/data/Headerdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

interface NavProps {
  className?: string; 
}

export default function Nav({ className }: NavProps) {
  return (
    <nav id='navbar' className={`navbar ${className}`}>
      <ul>
        {navs.map(nav => (
          <li key={nav.id}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
