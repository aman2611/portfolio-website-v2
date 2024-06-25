import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ idx, src, title, description, demoUrl, githubUrl }) {
  const isLeftImage = idx % 2 === 0;

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#2a2a2a] flex flex-row justify-between items-center border-2 border-[#aaaaaa] ${isLeftImage ? "flex-row-reverse" : ""}`}>
      <div className="p-4 flex flex-col gap-8 w-[50%]">
        <span className=" font-bold border-b-2 border-[#7f7f7f]">{`#0${idx}`} <span className="text-3xl text-white dark:text-black uppercase">{`${title}`} </span> </span>
        <p className="text-sm ">{description}</p>
        <div className="flex justify-between w-full mt-4 lg:mt-0">
          <Link
            href={demoUrl}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary py-2 px-4 text-center rounded-md text-white dark:text-black hover:bg-primary hover:border-transparent hover:text-white dark:text-black transition-colors duration-300 flex gap-2 items-center"
          >
            <span>Demo</span>
            <RiExternalLinkFill />
          </Link>
          <Link
            href={githubUrl}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary py-2 px-4 text-center rounded-md text-white dark:text-black hover:bg-primary hover:border-transparent hover:text-white dark:text-black transition-colors duration-300 flex gap-2 items-center"
          >
            <span>Github</span>
            <FaGithub />
          </Link>
        </div>
      </div>
      <Image
        src={src}
        alt={title}
        width={300}
        height={500}
        className="object-cover h-full w-[50%] rounded-lg "
      />
    </div>
  );
}

export default ProjectCard;
