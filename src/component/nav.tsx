import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 sticky top-0 bg-white z-50">

      <nav className="flex justify-between items-center container mx-auto px-4 py-4">

        {/* Mobile Hamburger + Logo */}
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

        {/* Desktop + Tablet Menu */}
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

      {/* Mobile Left Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl mb-8"
          >
            ✕
          </button>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-6">
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

        </div>
      </div>

    </div>
  );
};

export default Navbar;