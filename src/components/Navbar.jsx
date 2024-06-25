import React from 'react';
import ThemeSwitch from '../config/ThemeSwitch';

export default function Navbar() {
  
  return (
    <div className="flex justify-between w-full py-4 px-10 items-center text-black dark:text-white">
      <div>
        {/* <p className="font-semibold text-6xl text-[#975cdb] border border-[#975cdb] p-2">A</p> */}
      </div>
      <ul className="flex gap-4 items-center">
        <li><a href="#about" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">About</a></li>
        <li><a href="#works" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">Works</a></li>
        <li><a href="#contact" className="mx-2 px-2 border-b-2 border-transparent hover:border-primary">Contact</a></li>
        <li className="mx-2 px-2 cursor-pointer" >
          <ThemeSwitch/>
        </li>
      </ul>
    </div>
  );
}
