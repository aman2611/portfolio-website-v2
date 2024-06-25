import React from "react";
import ThemeSwitch from "../config/ThemeSwitch";

export default function NavSidebar() {
  return (
    <div className="fixed right-[-70px] top-0 h-full flex flex-col justify-between items-start ml-4 text-black dark:text-white">
      <ul className="flex flex-col gap-4 mt-10 ml-6">
      <li><a href="#about" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">About</a></li>
        <li><a href="#works" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">Works</a></li>
        <li><a href="#contact" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">Contact</a></li>
        <li className="mx-2 px-2 cursor-pointer" >
          <ThemeSwitch/>
        </li>
      </ul>
      <div className="flex justify-center items-center w-full mb-4">
        <p className="relative rotate-90 right-[18px] bottom-[120px] after:content-[''] after:block after:h-[2px] after:bg-black after:absolute after:top-1/2 after:left-full after:ml-2 after:w-40 hover:text-primary hover:after:bg-primary hover:translate-y-[-20px] transition-transform duration-300">
          amanprakash2611@gmail.com
        </p>
      </div>
    </div>
  );
}
