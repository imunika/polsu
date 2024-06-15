'use client';
import NavBar from "./components/NavBar";
import HamburgerMenu from "./components/HamburgerMenu";
import { allura, antic_didone, arizonia, italiana, lato, raleway, roboto, taviraj, playfair } from "./fonts";
import "./globals.css";
import { useEffect, useState } from 'react';

export default function RootLayout ({children}) {
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
    <html lang="en"
      className={`${playfair.variable} ${allura.variable} ${antic_didone.variable} ${arizonia.variable} ${italiana.variable} ${lato.variable} ${raleway.variable} ${roboto.variable} ${taviraj.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zhk1gcr.css" />
        <link rel="stylesheet" href="https://use.typekit.net/ysh6zjx.css"></link>
      </head>
      <body className="flex flex-col min-h-screen">
        <header>
          {isSmallScreen ? <HamburgerMenu /> : <NavBar />}
        </header>
        <main className="grow">
          {children}
        </main>
        <footer className="border-t py-3 text-white text-center text-xs bg-[rgb(60,61,65)]">
          Developed by{' '}
          <a href="https://www.unikaanalytics.com/" target="_blank"
              className="text-white hover:underline">
            Unika Analytics
          </a>
        </footer>
      </body>
    </html>
  );
}