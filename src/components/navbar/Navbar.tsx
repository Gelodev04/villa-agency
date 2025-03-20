import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Dropmenu from "./Dropmenu";
import { AnimatePresence } from "framer-motion";
import ScheduleButton from '../ui/ScheduleButton';

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Properties",
      href: "/",
    },
    {
      label: "Property Details",
      href: "/",
    },
    {
      label: "Contact Us",
      href: "/",
    },
  ]
  return (
    <>
      <nav className="p-6  bg-white lg:px-20">
        <div className="flex items-center justify-between ">
          <a href="/">
            <h1 className="font-bold text-3xl text-myblack  ">VILLA</h1>
          </a>
          <div className='lg:hidden'>
            <Hamburger color="#1E1E1E" toggled={isOpen} toggle={setOpen} />
          </div>

          <ul className='hidden lg:flex gap-10 items-center font-medium'>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-main duration-100 ease-out">
                  {item.label}
                </a>
              
              </li>
            ))}
            <ScheduleButton/>
          </ul>
        </div>
      </nav>

    <AnimatePresence>{isOpen && (<Dropmenu/>)}</AnimatePresence>
      
    </>
  );
}
