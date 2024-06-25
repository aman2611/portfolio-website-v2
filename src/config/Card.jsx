import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="flex bg-[#2a2a2a] p-4 rounded-2xl border-2 border-white">
      <div className="flex flex-col justify-between p-4">
        <div className="flex gap-1 border-b-2 border-gray-300">
          <span>#01</span>
          <p className="text-xl uppercase">title 1</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          
        </p>
        <div className="flex justify-between">
          <Link href="#" className="border-2 border-gray-300 px-4 py-2">
            button a
          </Link>
          <Link href="#" className="border-2 border-gray-300 px-4 py-2">
            button a
          </Link>
        </div>
      </div>
        <Image
          src="https://kllawingco.com/works/tobira/IphoneX-tobira.webp"
          alt="project"
          width={300}
          height={500}
          className=" object-contain w-full"
        ></Image>
    </div>
  );
}
