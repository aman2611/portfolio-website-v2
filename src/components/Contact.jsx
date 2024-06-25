import React from "react";
import Link from "next/link";
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col p-4 gap-20 mt-20">
      <div className="flex flex-col gap-4">
      <h3 className="text-4xl uppercase font-bold items-center text-black dark:text-white">
        <span className="text-5xl">S</span>ay Hi
        <span className="text-5xl">!</span>. 
        <span className="text-primary text-2xl hover:animate-bounce "> (⁀ᗢ⁀)</span>
      </h3>
      <p>
        Though, I am fairly introverted myself. I do reply to messages as long
        as my human interaction battery lasts. Coding, work, movies or even weeb
        stuff, anything is cool. So feel free to message me on any of my social
        media or shoot me an{" "}
        <Link href="mailto:amanprakash2611@gmail.com" className="text-primary hover:underline">
          email
        </Link>
        .
      </p>
    </div>
    <div className="flex flex-col items-center justify-center hover:text-primary">
      <RiGithubFill className="text-2xl"/>
      <p className="flex gap-1 items-center">Designed and made with <RiHeartPulseFill/></p>
      <p className="flex gap-1 items-center">Aman Prakash <RiCopyleftLine/> 2024 </p>
    </div>
    </div>
  );
}
