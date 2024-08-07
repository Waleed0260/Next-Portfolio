"use client"
import Image from 'next/image'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import introvert from "@/images/introvert.png"
import { BsToggleOff, BsToggleOn  } from "react-icons/bs";
// import Link from 'next/link';
// import { useTheme } from './ThemeContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';


const Header = () => {
  // const { darkMode, toggleTheme } = useTheme();
  return (
    <>
    <div className={`sm:flex hidden flex-row items-center justify-around p-2 w-full shadow-md bg-[#0A101E] text-white transition-all`}>
        <div>
            <Link to="home" smooth={true} duration={500}>
            <b className='font-bold text-2xl'>DEVELOPER</b>
            </Link>
        </div>
        <div>
            <ul className={`flex flex-row items-center gap-5 text`}>
                <li className='list-none cursor-pointer'> <Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='list-none cursor-pointer'> <Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className='list-none cursor-pointer'> <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li className='list-none cursor-pointer'> <Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li className='list-none cursor-pointer'> <Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>
    </div>
    <div className={`flex sm:hidden flex-row items-center justify-between p-2 w-full shadow-md bg-[#0A101E] text-white transition-all`}>
        <Sheet>
          <SheetTrigger>
            <AiOutlineMenu className={`mr-3 heading text-2xl`}/>
          </SheetTrigger>
          <SheetContent className="flex flex-start items-start bg-[#0A101E]">
            <SheetHeader className="mt-8">
              <SheetDescription className="mt-5 flex flex-col gap-3 items-start">
                <p className="cursor-pointer text mt-6">Home </p>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer text decoration-none">About</Link>
                <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer text decoration-none">Portfolio</Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer text decoration-none">Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
          </>
  )
}

export default Header 