import Skills from "@/config/Skills";
import React from "react";

export default function About() {
  return (
    <div id="about" className="min-h-[70vh] justify-center pt-14 pb-40">
      <h1 className="text-5xl font-bold uppercase pb-4 text-black dark:text-white">
        <span className="text-6xl ">W</span>hat I do.
      </h1>
      <p className="py-6">
        I`ve been coding professionally for more than 3 year now and currently working as
        a Software Engineer that focuses on Frontend Development and even back end integration stuff now like making APIs and nitty gritty business logics, how time flies!
      </p>
      <p className="py-2">Here are few technologies that are cup of my tea .</p>
      <div className="flex justify-between py-4 pr-36">
        <Skills/>
      </div>
    </div>
  );
}
