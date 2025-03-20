import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScheduleButton from "../ui/ScheduleButton";
import { lazy, Suspense } from "react";
const Dropmenu = lazy(() => import("./Dropmenu"));

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Featured",
      href: "#featured",
    },
    {
      label: "Best Deal",
      href: "#deal",
    },
    {
      label: "Properties",
      href: "#property",
    },
    {
      label: "Contact Us",
      href: "#contact",
    }
  ];
  return (
    <>
      <nav className="p-6  bg-white lg:px-20">
        <div className="flex items-center justify-between ">
          <a href="/">
            <h1 className="font-bold text-3xl text-myblack  ">VILLA</h1>
          </a>

          <div className="lg:hidden">
            <Hamburger color="#1E1E1E" toggled={isOpen} toggle={setOpen} />
          </div>

          <ul className="hidden lg:flex gap-10 items-center font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-main duration-100 ease-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <ScheduleButton />
          </ul>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <Dropmenu navItems={navItems}/>
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}
