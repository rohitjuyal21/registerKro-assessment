import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  return (
    <header className=" border-b border-[#D1D1D1]/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4  flex justify-between items-center">
        <Link to="/" className="relative">
          <img
            src="/assets/registerKro-logo.png"
            alt="Logo"
            className="h-7 md:h-9"
          />
          <img
            src="/assets/christmas-cap.png"
            alt="christmas-cap"
            className="absolute -top-3 -left-4 -rotate-[20deg] size-9  scale-x-[-1]"
          />
        </Link>
        <Navbar />
        <div className="flex lg:hidden">
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
