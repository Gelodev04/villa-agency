import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Dropmenu from "./Dropmenu";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

    
  return (
    <>
      <nav className="p-6  bg-white">
        <div className="flex items-center justify-between ">
          <h1 className="font-bold text-3xl text-myblack  ">VILLA</h1>
          <Hamburger color="#1E1E1E" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>

    {isOpen && (<Dropmenu/>)}
      
    </>
  );
}
