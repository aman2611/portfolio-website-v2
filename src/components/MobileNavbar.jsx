import React, { useState } from 'react';
import ThemeSwitch from '../config/ThemeSwitch';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative flex justify-between items-center py-4 px-4 dark:text-white dark:bg-black">
      <div>
        {/* Placeholder for logo or other content */}
      </div>
      <button className="text-white focus:outline-none items-start" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? '' : <IoMenuSharp />}
      </button>
      {showMenu && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 shadow z-50 flex flex-col justify-center items-center">
          <button className="absolute top-8 right-8 text-black dark:text-white" onClick={() => setShowMenu(false)}>
            <IoCloseSharp />
          </button>
          <ul className="flex flex-col justify-center items-center space-y-4 pt-4">
            <li>
              <a href="#about" className="text-black dark:text-white" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#works" className="text-black dark:text-white" onClick={closeMenu}>
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black dark:text-white" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li><ThemeSwitch /></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
