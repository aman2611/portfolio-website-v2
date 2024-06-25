import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-4">
      <a href="/" className="hover:text-primary">
        <FaTwitter className="text-2xl hover:text-primary transition-colors duration-300" />
      </a>
      <a href="/">
        <FaLinkedin className="text-2xl hover:text-primary transition-colors duration-300" />
      </a>
      <a href="/">
        <FaGithub className="text-2xl hover:text-primary transition-colors duration-300" />
      </a>
    </div>
  );
}
