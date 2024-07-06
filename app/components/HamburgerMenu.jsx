import Link from "next/link";
import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-30 shadow-lg bg-white bg-opacity-80 shadow-stone-400/[0.3] backdrop-blur-[0.5rem]">
      {/* Hamburger icon for small screens */}
      <button
        onClick={menuOpen ? closeMenu : openMenu}
        className={`px-10 py-4 text-2xl text-[#be3a3b] focus:outline-none ${menuOpen ? 'hidden' : ''} font-light`}
      >
        {menuOpen ? '' : <IoMenuOutline size={36} />}
      </button>

      {/* Full-Screen Overlay Menu for small screens */}
      {menuOpen && (
        <div className="fixed z-30 w-screen h-screen flex flex-col justify-center items-center bg-[#fdf9f9]">
          <Link href="#" className="fixed top-4 left-10 text-[#be3a3b] hover:no-underline text-7xl font-medium duration-300" onClick={closeMenu}><IoCloseOutline size={40} /></Link>
          <div className="flex flex-col font-lato text-white text-center text-2xl font-light space-y-6">
            <Link
              className="hover:no-underline relative text-[#be3a3b] font-arizonia text-6xl font-light"
              onClick={closeMenu}
              href="/">
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#be3a3b] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                PL
              </span>
            </Link>

            <Link
              className="hover:no-underline relative text-[#be3a3b] font-lato font-light"
              onClick={closeMenu}
              href="/#articles">
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#be3a3b] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                REFLECTIONS
              </span>
            </Link>

            <Link
              className="hover:no-underline relative text-[#be3a3b] font-lato font-light"
              onClick={closeMenu}
              href="/all-authors">
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#be3a3b] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                CONTRIBUTORS
              </span>
            </Link>

            <Link
              className="hover:no-underline relative text-[#be3a3b] font-lato font-light"
              onClick={closeMenu}
              href="/about">
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#be3a3b] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                ABOUT
              </span>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};
