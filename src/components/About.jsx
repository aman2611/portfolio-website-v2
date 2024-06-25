import Skills from "@/config/Skills";
import React from "react";

export default function About() {
  return (
    <div className="min-h-[70vh] justify-center pt-14 pb-40">
      <h1 className="text-5xl font-bold uppercase pb-4 text-white">
        <span className="text-6xl ">W</span>hat I do.
      </h1>
      <p className="py-6">
        I`ve been coding professionally for 8 years now and currently working as
        a Software Engineer that focuses on architecture, APIs, nitty-gritty
        business logics and even front end integration stuff now, how time
        flies!
      </p>
      <p className="py-2">Here are few technologies that are cup of my tea .</p>
      <div className="flex justify-between py-4 pr-36">
        <Skills/>
      </div>
    </div>
  );
}
