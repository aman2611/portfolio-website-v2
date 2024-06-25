"use client"

import { useState, useEffect } from "react";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import NavSidebar from "@/components/NavSidebar";
import { Providers } from "./providers";

const poppins = Poppins({ 
  weight:['100','200','300','400','500','600','700','800','900'],
  style: ['italic', 'normal'],
  subsets: ['latin'] })

export default function Portfolio({ children }) {
  const [showNavSidebar, setShowNavSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thresholdHeight = window.innerHeight * 0.7
      if (window.scrollY >= thresholdHeight) {
        setShowNavSidebar(true);
      } else {
        setShowNavSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className={`fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-slate-400 transition-transform duration-300 ${showNavSidebar ? '-translate-y-full' : 'translate-y-0'}`}>
            <Navbar />
          </div>
          <div className="grid grid-cols-12 gap-4 ml-10 bg-white text-black dark:bg-black dark:text-slate-400 ">
            <div className="col-span-4 p-14">
              <Sidebar />
            </div>
            <div className="flex col-span-7 ml-10 bg-white text-black dark:bg-black dark:text-slate-400">
              <div className="w-11/12 gap-2">
                {children}
              </div>
              {showNavSidebar && (
                <div className="col-span-1 bg-white text-black dark:bg-black dark:text-slate-400"> 
                  <NavSidebar />
                </div>
              )}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
