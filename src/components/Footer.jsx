import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
      <div className="flex items-center justify-center gap-4">
        <NavLink to="/" className="hover:text-neutral-50">
          About
        </NavLink>
        <NavLink to="/" className="hover:text-neutral-50">
          Contact
        </NavLink>
      </div>
      <p className="text-sm ">
        Made with<span className="animate-pulse text-neutral-50">❤️</span>in
        india. by Sangram
        <span> | Copyright © 2025</span>
      </p>
    </footer>
  );
};

export default Footer;
