import React from "react";
import Socials from "@/config/socials";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex fixed left-10 mt-20 w-1/3 pr-20 border-r-[1px] border-gray-300 items-center">
      <div className="flex flex-col gap-4 ">
        <p className="text-primary ">Hi! I am </p>
        <div className="flex flex-col gap-0">
          <h1 className="text-5xl text-white font-bold uppercase mt-6">Aman</h1>
          <h2 className="text-7xl font-bold uppercase text-primary hover:scale-110 tap:scale-90">Prakash.</h2>
        </div>
        <h3 className="text-[20px]  font-bold text-primary">Software Engineer</h3>
        <p className="text-sm">
          Hey! How nice of you to look at my personal site,
          <span className="text-primary">Thank you!</span>
          <br />I am software engineer that specializes at backend apis, front
          end integration, recently found myself studying UX too.
        </p>
          <Link
            href="mailto:amanprakash2611@gmail.com"
            className=" border-2 border-primary text-white px-6 py-2 hover:scale-110 max-w-fit"
          >
            Get in touch!
          </Link>
        <div className="mt-4">
        <Socials/>
        </div>
      </div>
    </div>
  );
}
