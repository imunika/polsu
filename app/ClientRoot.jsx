'use client';
import NavBar from "./components/NavBar";
import HamburgerMenu from "./components/HamburgerMenu";
import { useEffect, useState } from 'react';

export default function ClientRoot({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1025);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header>
        {isSmallScreen ? <HamburgerMenu /> : <NavBar />}
      </header>      
    </>
  );
}