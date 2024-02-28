/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useCallback, useState } from 'react'
import NavbarItem from './NavbarItem'
import {BsChevronDown, BsSearch} from 'react-icons/bs'
import MobileMenu from './MobileMenu'

export default function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {setShowMobileMenu((current)=> !current)},[]);

  return (
    <nav className='w-full fixed z-40'>
    <div className='px-4 md:px-16 py-10 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <img className='h-4 lg:h-7'  src='/images/logo.png' alt='I'/>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" active />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
           <p className="text-white text-sm">Browse</p>
           <BsChevronDown className="w-4 h-4 text-white transition"/>
           <MobileMenu visible={showMobileMenu}/>
        </div> 
        <div className='flex flex-row ml-auto gap-7 items-center'>
            <div className='text-gray-200 hover:text-gray-100 cursor-pointer transition'>
                <BsSearch/>
            </div>
        </div>
    </div>
    </nav>
  )
}