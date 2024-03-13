"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoNurva from '../../../../../public/nurva-logo.webp';
import NavLink from './components/LinkNav';
import NavMenuPhone from './components/NavMenu';
import { orbitron } from '@/fonts';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center xs:px-2 xs:pt-4 sm:p-6 w-full z-header sticky top-0 bg-white">
        {/* Logo */}
        <div className="w-full flex justify-center items-center px-4">
          <div>
            <Image src={LogoNurva} alt="Nurva Icon" width={60} height={60} />
          </div>
          <h1 className={`w-full text-nurva-blue-800 ${orbitron.className} sm:text-2xl font-semibold xs:text-md`}>
            Nurva
          </h1>
        </div>
        <MenuBar toggleMenu={toggleMenu} isOpen={isOpen}></MenuBar>
        <ul className="hidden sm:flex justify-end items-center w-full gap-4">
          <NavLink nameLink="Pricing" />
          <NavLink nameLink="About" />
          <NavLink nameLink="Contact" />
          <Link
            href={'#'}
            className={`text-xs md:text-sm rounded-2xl bg-nurva-blue-700 hover:bg-nurva-blue-600 transition-colors text-white py-2 px-4`}
          >
            SignUp
          </Link>
        </ul>
      </header>
          <NavMenuPhone isOpen={isOpen}/>
    </>
  );
}

export default Nav;

function MenuBar({ toggleMenu, isOpen }: { toggleMenu: React.MouseEventHandler<HTMLDivElement>, isOpen: boolean }) {
  return (
    <div className="flex justify-center items-center hover:cursor-pointer" onClick={toggleMenu}>
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="flex w-8 h-8 sm:hidden text-nurva-blue-800"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8
        flex  sm:hidden text-nurva-blue-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          
        </svg>
      )}
    </div>
  );
}

