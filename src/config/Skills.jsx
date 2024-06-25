"use client"

import {React, useState} from "react";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col gap-4 w-full text-white">
      <div className="flex justify-between w-full">
        <ul className="flex flex-col gap-2 py-2">
          <li className="flex gap-2 items-center">
            <SiNextdotjs className="text-xl text-primary" />
            <span>NextJs</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiJavascript className="text-xl text-primary" />
            <span>Javascript (ES6+)</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiHtml5 className="text-xl text-primary" />
            <span>HTML</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiTailwindcss className="text-xl text-primary" />
            <span>Tailwind</span>
          </li>
          {showMore && (
            <>
              <li className="flex gap-2 items-center">
                <SiExpress className="text-xl text-primary" />
                <span>Express</span>
              </li>
              <li className="flex gap-2 items-center">
                <SiFirebase className="text-xl text-primary" />
                <span>Firebase</span>
              </li>
            </>
          )}
        </ul>
        <ul className="flex flex-col gap-2 py-2">
          <li className="flex gap-2 items-center">
            <SiReact className="text-xl text-primary" />
            <span>React</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiTypescript className="text-xl text-primary" />
            <span>Typescript</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiCss3 className="text-xl text-primary" />
            <span>CSS</span>
          </li>
          <li className="flex gap-2 items-center">
            <SiNodedotjs className="text-xl text-primary" />
            <span>NodeJS</span>
          </li>
          {showMore && (
            <>
              <li className="flex gap-2 items-center">
                <SiMongodb className="text-xl text-primary" />
                <span>MongoDB</span>
              </li>
              <li className="flex gap-2 items-center">
                <SiGit className="text-xl text-primary" />
                <span>Git</span>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex flex-col  items-start gap-2">
        <button
          onClick={handleShowMore}
          className=" text-primary text-xs hover:underline decoration-primary "
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
