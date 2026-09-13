import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <nav className="flex justify-between items-center container mx-auto px-4 py-4">

        {/* Mobile hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          <img
            src={Logo}
            className="w-[150px] h-[40px]"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          <li className="text-[#D91B7E]">
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Technologies</a>
          </li>

          <li>
            <a href="/">Projects</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        {/* Sign In / Sign Up */}
        <div>
          <button className="px-4 rounded-md">
            <a href="/">Sign In</a>
          </button>

          <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-3xl hover:bg-pink-700 hover:scale-105 transition-transform duration-300">
            <a href="/">Sign Up</a>
          </button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;